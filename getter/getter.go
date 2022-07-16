package getter

import (
	"context"
	"fmt"
	database "movie/db"
	"sync/atomic"

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
	id     uint               // 专属id
	name   string             // 采集源的名字
	url    string             // 采集源的地址
	ok     bool               // 是否采集完成
	pg     int                // 当前采集到的页数
	run    *atomic.Value      // 是否正在采集
	ctx    context.Context    // 上下文
	cancel context.CancelFunc // 取消函数
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
		run:    newAtomicBool(),
		ctx:    ctx,
		cancel: cancel,
	}
	return get
}

// 开启采集
func (here *Getter) StartGet() {
	if !here.run.Load().(bool) {
		here.ctx, here.cancel = context.WithCancel(context.Background())
		here.run.Store(true)
		go here.get()
	} else {
		fmt.Println("采集处于开启状态")
	}
	// select {
	// case _, result_all := <-here.ctx.Done():
	// 	if !result_all {
	// 		here.ctx, here.cancel = context.WithCancel(context.Background())
	// 		go here.get()
	// 	}
	// default:
	// 	fmt.Println("采集处于开启状态")
	// }
}

// 关闭采集
func (here *Getter) StopGet() {
	here.cancel()
}

func (here *Getter) ReGet() {
	here.StopGet()
	for here.JudgeGetting() {
		// 进入一个自旋
	}
	db.UpdateSourcePg(here.id, 1)     // 数据库中采集页数更新到1页
	db.UpdateSourceOk(here.id, false) // 更新数据库中的采集进度未false
	here.pg = 1                       // getter本身也更新为1页
	here.ok = false                   // 采集进度调整为false，即未采集完成
	here.StartGet()
}
