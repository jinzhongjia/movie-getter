package db

import (
	"fmt"
	"movie/config"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Db struct {
	db *gorm.DB
}

// 构造函数
func NewDb() *Db {
	db, err := gorm.Open(mysql.Open(config.DbAddr), &gorm.Config{
		SkipDefaultTransaction: true, // 关闭事务
	})
	if err != nil {
		fmt.Println("连接数据库失败！")
		os.Exit(1)
	}
	err = db.AutoMigrate(&Source{}, &Content{}, &Category{}, &Class{}, &System{})
	if err != nil {
		fmt.Println("数据库同步失败！")
		os.Exit(1)
	}
	result := &Db{
		db: db,
	}
	result.systemInit() // 进行初次启动的初始化操作
	return result
}

func (here *Db) DbGet() *gorm.DB {
	return here.db
}
