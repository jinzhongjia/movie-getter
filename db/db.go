package db

import (
	"fmt"

	"github.com/ostafen/clover"
	"github.com/sirupsen/logrus"
)

type Db struct {
	db       *clover.DB
	source   *clover.Query // 来源表
	content  *clover.Query // 采集的资源表
	category *clover.Query // 自建分类表
	class    *clover.Query // 采集类表
}

func NewDb() *Db {
	// 尝试打开数据库
	db, err := clover.Open("clover-db")
	if err != nil {
		logrus.Fatal("connect clover failed! err:", err)
	}

	db.CreateCollection("source")
	// 来源表
	db.CreateCollection("content")
	// 采集的资源表
	db.CreateCollection("category")
	// 自建分类表
	db.CreateCollection("class")
	// 采集类表

	source := db.Query("source")
	content := db.Query("content")
	category := db.Query("category")
	class := db.Query("class")

	return &Db{
		db:       db,
		source:   source,
		content:  content,
		category: category,
		class:    class,
	}
}

//关闭连接
func (here *Db) Close() {
	here.db.Close()
	fmt.Println("关闭数据库")
}

func (here *Db) Export() {
	here.db.ExportCollection("source", "source.json")
	here.db.ExportCollection("content", "content.json")
	here.db.ExportCollection("category", "category.json")
	here.db.ExportCollection("class", "class.json")
}
