package gormDb

import (
	"gorm.io/gorm"
	"movie/db/struct"
)

// AddCategory 添加分类
func (here *Db) AddCategory(name string) (uint, error) {
	category := &_struct.Category{
		Name: name,
	}
	db := here.db.Create(category)
	return category.ID, db.Error
}

// UpdateCategoryName 更新分类名字
func (here *Db) UpdateCategoryName(id uint, newName string) error {
	db := here.db.Model(&_struct.Category{
		ID: id,
	}).Update("name", newName)
	return db.Error
}

// DelCategory 删除分类
func (here *Db) DelCategory(id uint) error {
	var db *gorm.DB

	// 创建事务
	tx := here.db.Begin()
	// 尝试删除关系
	err := tx.Model(&_struct.Category{
		ID: id,
	}).Association("Class").Clear()
	if err != nil {
		tx.Rollback()
		return err
	}
	// 尝试删除自建分类
	db = tx.Delete(&_struct.Category{
		ID: id,
	})
	if db.Error != nil {
		tx.Rollback()
		return db.Error
	}
	// 提交事务
	tx.Commit()
	return nil
}

// AllCategory 获取所有分类
func (here *Db) AllCategory() ([]_struct.Category, error) {
	categories := make([]_struct.Category, 0)
	db := here.db.Find(&categories)
	return categories, db.Error
}

// CategoryMovieCount 获取当前自建分类下所有的影片数目
func (here *Db) CategoryMovieCount(categoryId uint) (int, error) {
	classIds := make([]uint, 0)
	err := here.db.Model(&_struct.Category{
		ID: categoryId,
	}).Select("id").Association("Class").Find(&classIds)
	result := 0
	for _, classId := range classIds {
		result += here.ClassMovieNum(classId)
	}
	return result, err
}

func (here *Db) CategoryClassCount(categoryId uint) int {

	result := here.db.Model(&_struct.Category{
		ID: categoryId,
	}).Association("Class").Count()
	return int(result)
}
