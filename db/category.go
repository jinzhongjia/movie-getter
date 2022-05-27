package db

import "gorm.io/gorm"

// 添加分类
func (here *Db) AddCategory(name string) (uint, error) {
	category := &Category{
		Name: name,
	}
	db := here.db.Create(category)
	return category.ID, db.Error
}

// 删除分类
func (here *Db) UpdateCategoryName(oldName string, newName string) error {
	db := here.db.Model(&Category{}).Where("name = ?", oldName).Update("name", newName)
	return db.Error
}

// 删除分类
func (here *Db) DelCategory(name string) error {
	var db *gorm.DB

	// 创建事务
	tx := here.db.Begin()
	// 尝试删除关系
	err := tx.Model(&Category{}).Where("name = ?", name).Association("Class").Clear()
	if err != nil {
		tx.Rollback()
		return err
	}
	// 尝试删除自建分类
	db = tx.Where("name = ?", name).Delete(&Category{})
	if db.Error != nil {
		tx.Rollback()
		return db.Error
	}
	// 提交事务
	tx.Commit()
	return nil
}

// 获取所有分类
func (here *Db) AllCategory() ([]Category, error) {
	var categories []Category
	db := here.db.Find(&categories)
	return categories, db.Error
}
