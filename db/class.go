package db

import "gorm.io/gorm"

// 添加class
func (here *Db) AddClass(sourceId uint, name string, classId int) error {
	var db *gorm.DB
	class := &Class{
		Name:    name,
		ClassId: classId,
	}
	// 创建事务
	tx := here.db.Begin()
	// 开始创建class
	db = tx.Create(class)
	if db.Error != nil {
		tx.Rollback()
		return db.Error
	}
	// 尝试添加关系
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

// 分配class，这里的classId是表中的id
func (here *Db) DistributeClass(classId uint, categoryId uint) error {
	return here.db.Model(&Category{
		ID: categoryId,
	}).Association("Class").Append(&Class{
		ID: classId,
	})
}

func (here *Db) JudgeClass(SourceId uint, classId uint) bool {
	var class Class
	here.db.Model(&Source{
		ID: SourceId,
	}).Association("Class").Find(&class, classId)

	return class.Get
}
