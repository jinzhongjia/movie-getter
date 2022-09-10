package gormDb

import (
	"gorm.io/gorm"
	"math"
	"movie/db/struct"
	"time"
)

func (here *Db) AddContent(
	content_Id int,
	name string, // 影片名
	pic string, //
	actor string,
	director string,
	duration string,
	description string,
	url string,
	class_Id int, //所属类别
	sourceId uint, // source id
) error {
	id, ok := here.existContent(content_Id, sourceId)
	if ok {
		return here.updateContent(id,
			content_Id,
			name,
			pic,
			actor,
			director,
			duration,
			description,
			url,
			//class_Id,
			//sourceId,
		)
	}
	return here.addContent(
		content_Id,
		name,
		pic,
		actor,
		director,
		duration,
		description,
		url,
		class_Id,
		sourceId)
}

func (here *Db) existContent(content_Id int, sourceId uint) (uint, bool) {
	var content _struct.Content
	here.db.Where("content_id = ? AND source_id = ?", content_Id, sourceId).Select("id").Find(&content)
	if content.ID == 0 {
		return 0, false
	}

	return content.ID, true
}

func (here *Db) updateContent(
	id uint,
	content_Id int,
	name string, // 影片名
	pic string, //
	actor string,
	director string,
	duration string,
	description string,
	url string,
	// class_Id int, //所属类别
	// sourceId uint, // source id
) error {
	content := &_struct.Content{

		ContentId:   content_Id,
		Name:        name,
		Pic:         pic,
		Actor:       actor,
		Director:    director,
		Duration:    duration,
		Description: description,
		Url:         url,
		Stamp:       time.Now().Unix(),
	}
	db := here.db.Model(&_struct.Content{
		ID: id,
	}).Updates(content)
	return db.Error
}

func (here *Db) addContent(
	content_Id int,
	name string, // 影片名
	pic string, //
	actor string,
	director string,
	duration string,
	description string,
	url string,
	class_Id int, //所属类别
	sourceId uint, // source id
) error {
	var db *gorm.DB
	content := &_struct.Content{
		ContentId:   content_Id,
		Name:        name,
		Pic:         pic,
		Actor:       actor,
		Director:    director,
		Duration:    duration,
		Description: description,
		Url:         url,
		Stamp:       time.Now().Unix(),
	}
	// 创建事务
	tx := here.db.Begin()

	// 创建content
	db = tx.Create(content)
	if db.Error != nil {
		tx.Rollback()
		return db.Error
	}

	// 添加content与source关联
	err := tx.Model(&_struct.Source{
		ID: sourceId,
	}).Association("Content").Append(content)
	if err != nil {
		tx.Rollback()
		return err
	}

	// 尝试寻找class
	classId := here.getClassIdBySourceId(sourceId, class_Id)

	// 尝试添加content与class关系
	err = tx.Model(&_struct.Class{
		ID: classId,
	}).Association("Content").Append(content)
	if err != nil {
		tx.Rollback()
		return err
	}

	// 提交事务
	tx.Commit()
	return nil
}

// DelContent 删除content
func (here *Db) DelContent(id uint) error {
	db := here.db.Delete(&_struct.Content{}, id)
	return db.Error
}

// SearchContent 全局搜索影片
func (here *Db) SearchContent(keyword string, num int, pg int) ([]_struct.Content, int, error) {
	// 尝试进行搜索操作
	contents := make([]_struct.Content, 0)
	db := here.db.Select("id", "name", "pic", "actor", "director", "duration", "description", "url").Where("name LIKE ?", "%"+keyword+"%").Offset(num * (pg - 1)).Limit(num).Find(&contents)

	// 尝试进行计数操作
	var count int64
	here.db.Model(&_struct.Content{}).Where("name LIKE ?", "%"+keyword+"%").Count(&count)

	// 返回结果
	return contents, int(math.Ceil(float64(count) / float64(num))), db.Error
}

// SearchContent_Category 搜索自建分类下影片
func (here *Db) SearchContent_Category(categoryId uint, keyword string, num int, pg int) ([]_struct.Content, int, error) {
	// 查询所属分类下的采集类
	var class []int
	_ = here.db.Model(&_struct.Category{
		ID: categoryId,
	}).Select("id").Association("Class").Find(&class)

	// 定义变量结果存储
	var contents []_struct.Content
	db := here.db.Select("id", "name", "pic", "actor", "director", "duration", "description", "url").Where("name LIKE ? AND class_id IN ?", "%"+keyword+"%", class).Offset(num * (pg - 1)).Limit(num).Find(&contents)

	// 尝试进行计数操作
	var count int64
	here.db.Model(&_struct.Content{}).Where("name LIKE ? AND class_id IN ?", "%"+keyword+"%", class).Count(&count)

	// 返回结果
	return contents, int(math.Ceil(float64(count) / float64(num))), db.Error
}

// SearchContent_Class 搜索采集分类下影片
func (here *Db) SearchContent_Class(classId uint, keyword string, num int, pg int) ([]_struct.Content, int, error) {
	// 定义变量结果存储
	var contents []_struct.Content
	db := here.db.Select("id", "name", "pic", "actor", "director", "duration", "description", "url").Where("name LIKE ? AND class_id = ?", "%"+keyword+"%", classId).Offset(num * (pg - 1)).Limit(num).Find(&contents)

	// 尝试进行计数操作
	var count int64
	here.db.Model(&_struct.Content{}).Where("name LIKE ? AND class_id = ?", "%"+keyword+"%", classId).Count(&count)

	// 返回结果
	return contents, int(math.Ceil(float64(count) / float64(num))), db.Error
}

// SearchContent_Source 搜索某个采集源下的影片
func (here *Db) SearchContent_Source(sourceId uint, keyword string, num int, pg int) ([]_struct.Content, int, error) {
	// 定义变量结果存储
	var contents []_struct.Content
	db := here.db.Select("id", "name", "pic", "actor", "director", "duration", "description", "url").Where("name LIKE ? AND source_id = ?", "%"+keyword+"%", sourceId).Offset(num * (pg - 1)).Limit(num).Find(&contents)

	// 尝试进行计数操作
	var count int64
	here.db.Model(&_struct.Content{}).Where("name LIKE ? AND source_id = ?", "%"+keyword+"%", sourceId).Count(&count)

	// 返回结果
	return contents, int(math.Ceil(float64(count) / float64(num))), db.Error
}

// ContentList 全局影片列表
func (here *Db) ContentList(num int, pg int) ([]_struct.Content, int, error) {
	// 尝试进行搜索操作
	var contents []_struct.Content
	db := here.db.Select("id", "name", "pic", "actor", "director", "duration", "description", "url").Offset(num * (pg - 1)).Limit(num).Find(&contents)

	// 尝试进行计数操作
	var count int64
	here.db.Model(&_struct.Content{}).Count(&count)

	// 返回结果
	return contents, int(math.Ceil(float64(count) / float64(num))), db.Error
}

// ContentList_Category 自建分类影片列表
func (here *Db) ContentList_Category(categoryId uint, num int, pg int) ([]_struct.Content, int, error) {
	// 查询所属分类下的采集类
	var class []int
	_ = here.db.Model(&_struct.Category{
		ID: categoryId,
	}).Select("id").Association("Class").Find(&class)

	// 定义变量结果存储
	var contents []_struct.Content
	db := here.db.Select("id", "name", "pic", "actor", "director", "duration", "description", "url").Where("class_id IN ?", class).Offset(num * (pg - 1)).Limit(num).Find(&contents)

	// 尝试进行计数操作
	var count int64
	here.db.Model(&_struct.Content{}).Where("class_id IN ?", class).Count(&count)

	// 返回结果
	return contents, int(math.Ceil(float64(count) / float64(num))), db.Error
}

// ContentList_Class 采集类影片列表
func (here *Db) ContentList_Class(classId uint, num int, pg int) ([]_struct.Content, int, error) {
	// 定义变量结果存储
	var contents []_struct.Content
	db := here.db.Select("id", "name", "pic", "actor", "director", "duration", "description", "url").Where("class_id = ?", classId).Offset(num * (pg - 1)).Limit(num).Find(&contents)

	// 尝试进行计数操作
	var count int64
	here.db.Model(&_struct.Content{}).Where("class_id = ?", classId).Count(&count)

	// 返回结果
	return contents, int(math.Ceil(float64(count) / float64(num))), db.Error
}

// ContentList_Source 采集源影片列表
func (here *Db) ContentList_Source(sourceId uint, num int, pg int) ([]_struct.Content, int, error) {
	// 定义变量结果存储
	var contents []_struct.Content
	db := here.db.Select("id", "name", "pic", "actor", "director", "duration", "description", "url").Where("source_id = ?", sourceId).Offset(num * (pg - 1)).Limit(num).Find(&contents)

	// 尝试进行计数操作
	var count int64
	here.db.Model(&_struct.Content{}).Where("source_id = ?", sourceId).Count(&count)

	// 返回结果
	return contents, int(math.Ceil(float64(count) / float64(num))), db.Error
}

// GetContent 获取影片
func (here *Db) GetContent(id uint) (_struct.Content, error) {
	var content _struct.Content
	db := here.db.First(&content, id)
	return content, db.Error
}

// BrowseContentByCategory 分类下的影片
func (here *Db) BrowseContentByCategory(categoryId uint, num int, pg int) ([]_struct.Content, int, error) {
	// 查询所属分类下的采集类
	var class []int
	_ = here.db.Model(&_struct.Category{
		ID: categoryId,
	}).Select("id").Association("Class").Find(&class)

	// 创建一个存储content的切片
	var contents []_struct.Content

	// 查询content
	db := here.db.Model(&_struct.Content{}).Where("class_id IN ?", class).Order("stamp desc").Select("id", "name", "pic", "actor", "director", "duration", "description").Offset(num * (pg - 1)).Limit(num).Find(&contents)

	// 查询计数
	var count int64
	here.db.Model(&_struct.Content{}).Where("class_id IN ?", class).Count(&count)
	// fmt.Printf("count: %v\n", count)

	return contents, int(math.Ceil(float64(count) / float64(num))), db.Error
}

// ContentCount 获取全部影片的数目
func (here *Db) ContentCount() int {
	var result int64
	here.db.Model(&_struct.Content{}).Count(&result)
	return int(result)
}
