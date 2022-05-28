package db

import (
	"movie/config"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Db struct {
	db *gorm.DB
}

// 构造函数
func NewDb() *Db {
	db, err := gorm.Open(sqlite.Open(config.DbPath), &gorm.Config{
		SkipDefaultTransaction: true, // 关闭事务
	})
	if err != nil {
		panic("failed to connect database")
	}
	db.AutoMigrate(&Source{}, &Content{}, &Class{}, &Category{})
	return &Db{
		db: db,
	}
}
