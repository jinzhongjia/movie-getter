package db

import (
	"gorm.io/gorm"
)

// 添加class
func (here *Db) AddClass(sourceId uint, name string, class_Id int) error {
	var db *gorm.DB
	class := &Class{
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
	err := tx.Model(&Source{
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

// 分配class
func (here *Db) DistributeClass(classId uint, categoryId uint) error {
	return here.db.Model(&Category{
		ID: categoryId,
	}).Association("Class").Append(&Class{
		ID: classId,
	})
}

// 判断判断当前分类是否允许采集
func (here *Db) JudgeClass(SourceId uint, class_Id uint) bool {
	var class Class
	here.db.Model(&Source{
		ID: SourceId,
	}).Select("get").Where("class_id = ?", class_Id).Association("Class").Find(&class)

	return class.Get
}

// 通过source和class_id获取classId
func (here *Db) getClassIdBySourceId(sourceId uint, class_Id int) uint {
	var class Class
	here.db.Model(&Source{
		ID: sourceId,
	}).Where("class_id = ?", class_Id).Association("Class").Find(&class)
	return class.ID
}

// 获取某资源库下所有采集类
func (here *Db) GetClass(sourceId uint) ([]Class, error) {
	var classes []Class
	err := here.db.Model(&Source{
		ID: sourceId,
	}).Select("id", "name", "get").Association("Class").Find(&classes)
	return classes, err
}

// 改变采集状态
func (here *Db) ChangeClassGet(classId uint, get bool) error {
	db := here.db.Model(&Class{
		ID: classId,
	}).Update("get", get)
	return db.Error
}

// 获取某个采集分类下的所有影片
func (here *Db) ClassMovieNum(classId uint) int {
	result := here.db.Model(&Class{
		ID: classId,
	}).Association("Content").Count()
	return int(result)
}
