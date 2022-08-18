package gormDb

import (
	"fmt"
	"movie/config"
	"movie/db/struct"
	_type "movie/db/type"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Db struct {
	db *gorm.DB
}

// NewDb 构造函数
func NewDb() *Db {
	db, err := gorm.Open(mysql.Open(config.MysqlAddr), &gorm.Config{
		SkipDefaultTransaction: true, // 关闭事务
	})
	if err != nil {
		fmt.Println("连接数据库失败！")
		os.Exit(1)
	}
	err = db.AutoMigrate(&_struct.Source{}, &_struct.Content{}, &_struct.Category{}, &_struct.Class{}, &_struct.System{})
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

// DbGet 获取gorm句柄
func (here *Db) DbGet() interface{} {
	return here.db
}

// DbType 获取数据库类型
func (here *Db) DbType() int {
	return _type.Gorm
}
