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

type Getter struct {
	name   string
	url    string
	alias  string
	pg     int
	ctx    context.Context
	cancel context.CancelFunc
}

func NewGetter(name string, url string, alias string, pg int) *Getter {
	if db == nil {
		logrus.Errorln("the db is nil!")
	}
	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	get := &Getter{
		name:   name,
		url:    url,
		alias:  alias,
		pg:     pg,
		ctx:    ctx,
		cancel: cancel,
	}
	return get
}

func (here *Getter) StopGet() {
	here.cancel()
}

func (here *Getter) StartGet() {

	select {
	case _, result := <-here.ctx.Done():
		if !result {
			here.ctx, here.cancel = context.WithCancel(context.Background())
			go here.GetAll()
			go here.GetDaily()
		}
	default:
		fmt.Println("处于开启状态")
	}

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

func protect() {
	err := recover()
	if err != nil {
		logrus.Error("采集发生错误：", err)
	}
}
