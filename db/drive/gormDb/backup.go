package gormDb

import (
	_struct "movie/db/struct"

	"gorm.io/gorm"
)

// 该函数用于数据库的导出功能
// 导出需要的内容有：采集源的信息，还有自建分类的信息，然后对应的采集类和自建分类的绑定为可选导出
func (here *Db) Exports() (_struct.DATA, error) {
	var res _struct.DATA

	var result *gorm.DB

	var sources []_struct.Source
	result = here.db.Select("id", "name", "url").Find(&sources)

	if result.Error != nil {
		return res, result.Error
	}

	var categories []_struct.Category
	result = here.db.Find(&categories)

	if result.Error != nil {
		return res, result.Error
	}

	var classes []_struct.Class
	result = here.db.Select("id", "name", "class_id", "get", "source_id", "category_id").Find(&classes)
	if result.Error != nil {
		return res, result.Error
	}

	res.Sources = sources
	res.Categories = categories
	res.Classes = classes

	return res, nil
}

func (here *Db) Imports(data _struct.DATA) error {
	var result *gorm.DB

	sources := data.Sources
	categories := data.Categories
	classes := data.Classes

	return here.db.Transaction(func(tx *gorm.DB) error {
		result = tx.Create(&sources)
		if result.Error != nil {
			return result.Error
		}

		result = tx.Create(&categories)
		if result.Error != nil {
			return result.Error
		}

		result = tx.Create(&classes)
		if result.Error != nil {
			return result.Error
		}

		// 返回 nil 提交事务
		return nil
	})
}
