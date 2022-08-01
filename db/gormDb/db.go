package gormDb

import (
	"fmt"
	"github.com/go-redis/redis/v8"
	"movie/config"
	"movie/db/struct"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Db struct {
	db *gorm.DB
}

// NewDb 构造函数
func NewDb() *Db {
	db, err := gorm.Open(mysql.Open(config.DbAddr), &gorm.Config{
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

// DbGetGorm 获取gorm句柄
func (here *Db) DbGetGorm() *gorm.DB {
	return here.db
}

// DbGetRedis 获取redis句柄
func (here *Db) DbGetRedis() *redis.Client {
	return nil
}
