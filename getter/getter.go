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
		changer := v.Get("changer").(bool)
		// fmt.Println(name)
		getters[alias] = NewGetter(name, url, alias, pg, changer)
	}
	return getters
}

type Getter struct {
	name    string
	url     string
	alias   string
	pg      int
	changer bool
	ctx     context.Context
	cancel  context.CancelFunc
}

func NewGetter(name string, url string, alias string, pg int, changer bool) *Getter {
	if db == nil {
		logrus.Errorln("the db is nil!")
	}
	// 采集的ctx
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	get := &Getter{
		name:    name,
		url:     url,
		alias:   alias,
		pg:      pg,
		changer: changer,
		ctx:     ctx,
		cancel:  cancel,
	}
	return get
}

// 开启采集
func (here *Getter) StartGet() {
	select {
	case _, result_all := <-here.ctx.Done():
		if !result_all {
			here.ctx, here.cancel = context.WithCancel(context.Background())
			go here.Get()
		}
	default:
		fmt.Println("采集处于开启状态")
	}
}

// 关闭采集
func (here *Getter) StopGet() {
	here.cancel()
}
