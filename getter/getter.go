package getter

import (
	"context"
	"fmt"
	database "movie/db"

	"github.com/sirupsen/logrus"
)

var db *database.Db

func SetDb(tmp *database.Db) map[string]*Getter {
	db = tmp
	return run()
}

func run() map[string]*Getter {
	sources := db.GetSource()
	getters := make(map[string]*Getter)
	for _, v := range sources {
		name := v.Get("name").(string)
		url := v.Get("url").(string)
		alias := v.Get("alias").(string)
		pg := int(v.Get("pg").(int64))
		// fmt.Println(name)
		getters[alias] = NewGetter(name, url, alias, pg)
	}
	return getters
}

type Getter struct {
	name         string
	url          string
	alias        string
	pg           int
	ctx_all      context.Context
	cancel_all   context.CancelFunc
	ctx_daily    context.Context
	cancel_daily context.CancelFunc
}

func NewGetter(name string, url string, alias string, pg int) *Getter {
	if db == nil {
		logrus.Errorln("the db is nil!")
	}
	// 全局采集的ctx
	ctx_all, cancel_all := context.WithCancel(context.Background())
	// 定时采集的ctx
	ctx_daily, cancel_daily := context.WithCancel(context.Background())
	cancel_all()
	cancel_daily()
	get := &Getter{
		name:         name,
		url:          url,
		alias:        alias,
		pg:           pg,
		ctx_all:      ctx_all,
		cancel_all:   cancel_all,
		ctx_daily:    ctx_daily,
		cancel_daily: cancel_daily,
	}
	return get
}

// 停止全局采集和定时采集
func (here *Getter) StopGet() {
	here.StopGet_all()
	here.StopGet_daily()
}

// 开启全局采集和定时采集
func (here *Getter) StartGet() {
	here.StartGet_all()
	here.StartGet_daily()
}

// 先开启全局采集
func (here *Getter) StartGet_all() {
	select {
	case _, result_all := <-here.ctx_all.Done():
		if !result_all {
			here.ctx_all, here.cancel_all = context.WithCancel(context.Background())
			go here.GetAll()
		}
	default:
		fmt.Println("全局采集处于开启状态")
	}
}

func (here *Getter) StopGet_all() {
	here.cancel_all()
}

// 开启定时采集
func (here *Getter) StartGet_daily() {
	select {
	case _, result_daily := <-here.ctx_daily.Done():
		if !result_daily {
			here.ctx_daily, here.cancel_daily = context.WithCancel(context.Background())
			go here.GetDaily()
		}
	default:
		fmt.Println("定时采集处于开启状态")
	}
}
func (here *Getter) StopGet_daily() {
	here.cancel_daily()
}
