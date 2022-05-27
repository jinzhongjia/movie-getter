package db

import (
	"time"

	"gorm.io/gorm"
)

func (here *Db) AddContent(
	contentId int,
	name string, // 影片名
	pic string, //
	actor string,
	director string,
	duration string,
	description string,
	url string,
	classId int, //所属类别
	sourceId uint, // source id
) error {
	id, ok := here.existContent(contentId, sourceId)
	if ok {
		return here.updateContent(id,
			contentId,
			name,
			pic,
			actor,
			director,
			duration,
			description,
			url,
			classId,
			sourceId,
		)
	}
	return here.addContent(
		contentId,
		name,
		pic,
		actor,
		director,
		duration,
		description,
		url,
		classId,
		sourceId)
}

func (here *Db) existContent(contentId int, sourceId uint) (uint, bool) {
	var content Content
	here.db.Where("content_id = ? AND source_id = ?", contentId, sourceId).Select("id").Find(&content)
	if content.ID == 0 {
		return 0, false
	}

	return content.ID, true
}

func (here *Db) updateContent(
	id uint,
	contentId int,
	name string, // 影片名
	pic string, //
	actor string,
	director string,
	duration string,
	description string,
	url string,
	classId int, //所属类别
	sourceId uint, // source id
) error {
	content := &Content{

		ContentId:   contentId,
		Name:        name,
		Pic:         pic,
		Actor:       actor,
		Director:    director,
		Duration:    duration,
		Description: description,
		Url:         url,
		Stamp:       time.Now().Unix(),
	}
	db := here.db.Model(&Content{
		ID: id,
	}).Updates(content)
	return db.Error
}

func (here *Db) addContent(
	contentId int,
	name string, // 影片名
	pic string, //
	actor string,
	director string,
	duration string,
	description string,
	url string,
	classId int, //所属类别
	sourceId uint, // source id
) error {
	var db *gorm.DB
	content := &Content{
		ContentId:   contentId,
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
	err := tx.Model(&Source{
		ID: sourceId,
	}).Association("Content").Append(content)
	if err != nil {
		tx.Rollback()
		return err
	}

	// 声明一个class变量
	var class Class

	// 尝试寻找class
	db = tx.Where("class_id = ?", classId).First(&class)
	if db.Error != nil {
		tx.Rollback()
		return db.Error
	}

	// 尝试添加content与class关系
	err = tx.Model(&class).Association("Content").Append(content)
	if err != nil {
		tx.Rollback()
		return err
	}

	// 提交事务
	tx.Commit()
	return nil
}

// 删除content
func (here *Db) DelContent(id uint) error {
	db := here.db.Delete(&Content{}, id)
	return db.Error
}
