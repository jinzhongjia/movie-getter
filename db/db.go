package db

import (
	"movie/config"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Db struct {
	db *gorm.DB
}

// 构造函数
func NewDb() *Db {
	db, err := gorm.Open(mysql.Open(config.DbPath), &gorm.Config{
		SkipDefaultTransaction: true, // 关闭事务
	})
	if err != nil {
		panic("failed to connect database")
	}
	db.AutoMigrate(&Source{}, &Content{}, &Category{}, &Class{})
	return &Db{
		db: db,
	}
}
