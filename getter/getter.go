package getter

import (
	"context"
	database "movie/db"
	"movie/util"
	"sync/atomic"
)

var db database.Db

func SetDb(tmp database.Db) map[uint]*Getter {
	// 设置数据库
	db = tmp
	// 查询数据库获取所有的source
	sources, err := db.AllSource()
	if err != nil {
		util.Logger.Panicf("SetDb failed because query database failed, err is %s\n", err)
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

// NewGetter 构造函数
func NewGetter(id uint, name string, url string, ok bool, pg int) *Getter {
	if db == nil {
		util.Logger.Panicf("the db handle is nil!\n")
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

// StartGet 开启采集
func (here *Getter) StartGet() {
	if !here.run.Load().(bool) {
		here.ctx, here.cancel = context.WithCancel(context.Background())
		here.run.Store(true)
		go here.get()
	} else {
		util.Logger.Infof("all getters have started!\n")
	}
}

// StopGet 关闭采集
func (here *Getter) StopGet() {
	here.cancel()
}

func (here *Getter) ReGet() {
	here.StopGet()
	for here.JudgeGetting() {
		// 进入一个自旋
	}
	err := db.UpdateSourcePg(here.id, 1) // 数据库中采集页数更新到1页
	if err != nil {
		util.Logger.Errorf("getter reget source failed, because update the page failed, err is %s\n", err)
	}
	err = db.UpdateSourceOk(here.id, false) // 更新数据库中的采集进度未false
	if err != nil {
		util.Logger.Errorf("getter reget source failed, because update the status failed, err is %s\n", err)
	}
	here.pg = 1     // getter本身也更新为1页
	here.ok = false // 采集进度调整为false，即未采集完成
	here.StartGet()
}
