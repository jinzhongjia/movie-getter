package gormDb

import (
	"gorm.io/gorm"
	"movie/db/struct"
)

// AddClass 添加class
func (here *Db) AddClass(sourceId uint, name string, class_Id int) error {
	var db *gorm.DB
	class := &_struct.Class{
		Name:    name,
		ClassId: class_Id,
	}
	// 创建事务
	tx := here.db.Begin()
	// 开始创建class
	db = tx.Create(class)
	if db.Error != nil {
		tx.Rollback()
		return db.Error
	}
	// 添加与source的关系
	err := tx.Model(&_struct.Source{
		ID: sourceId,
	}).Association("Class").Append(class)
	if err != nil {
		tx.Rollback()
		return err
	}
	// 提交事务
	tx.Commit()
	return nil
}

// DistributeClass 分配class
func (here *Db) DistributeClass(classId uint, categoryId uint) error {
	return here.db.Model(&_struct.Category{
		ID: categoryId,
	}).Association("Class").Append(&_struct.Class{
		ID: classId,
	})
}

// JudgeClass 判断判断当前分类是否允许采集
func (here *Db) JudgeClass(SourceId uint, class_Id uint) bool {
	var class _struct.Class
	err := here.db.Model(&_struct.Source{
		ID: SourceId,
	}).Select("get").Where("class_id = ?", class_Id).Association("Class").Find(&class)
	if err != nil {
		return false
	}
	return class.Get
}

// 通过source和class_id获取classId
func (here *Db) getClassIdBySourceId(sourceId uint, class_Id int) uint {
	var class _struct.Class
	here.db.Model(&_struct.Source{
		ID: sourceId,
	}).Where("class_id = ?", class_Id).Association("Class").Find(&class)
	return class.ID
}

// GetClass 获取某资源库下所有采集类
func (here *Db) GetClass(sourceId uint) ([]_struct.Class, error) {
	var classes []_struct.Class
	err := here.db.Model(&_struct.Source{
		ID: sourceId,
	}).Select("id", "name", "get", "category_id").Association("Class").Find(&classes)
	return classes, err
}

// ChangeClassGet 改变采集状态
func (here *Db) ChangeClassGet(classId uint, get bool) error {
	db := here.db.Model(&_struct.Class{
		ID: classId,
	}).Update("get", get)
	return db.Error
}

// ClassMovieNum 获取某个采集分类下的所有影片
func (here *Db) ClassMovieNum(classId uint) int {
	result := here.db.Model(&_struct.Class{
		ID: classId,
	}).Association("Content").Count()
	return int(result)
}
