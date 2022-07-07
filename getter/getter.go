package getter

import (
	"context"
	"fmt"
	database "movie/db"

	"github.com/sirupsen/logrus"
)

var db *database.Db

func SetDb(tmp *database.Db) map[uint]*Getter {
	// 设置数据库
	db = tmp
	// 查询数据库获取所有的source
	sources, err := db.AllSource()
	if err != nil {
		panic("查询数据库失败！")
	}
	getters := make(map[uint]*Getter)
	for _, v := range sources {
		getters[v.ID] = NewGetter(v.ID, v.Name, v.Url, v.Ok, v.Pg)
	}
	ChangeInterval(db.GetCollectInterval())
	return getters
}

type Getter struct {
	id     uint
	name   string
	url    string
	ok     bool
	pg     int
	ctx    context.Context
	cancel context.CancelFunc
}

// 构造函数
func NewGetter(id uint, name string, url string, ok bool, pg int) *Getter {
	if db == nil {
		logrus.Errorln("the db is nil!")
	}
	// 初始化采集所用的ctx
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	get := &Getter{
		id:     id,
		name:   name,
		url:    url,
		ok:     ok,
		pg:     pg,
		ctx:    ctx,
		cancel: cancel,
	}
	return get
}

// 开启采集
func (here *Getter) StartGet() {
	select {
	case _, result_all := <-here.ctx.Done():
		if !result_all {
			here.ctx, here.cancel = context.WithCancel(context.Background())
			go here.get()
		}
	default:
		fmt.Println("采集处于开启状态")
	}
}

// 关闭采集
func (here *Getter) StopGet() {
	here.cancel()
}
