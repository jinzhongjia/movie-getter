package gormDb

import (
	"github.com/wader/gormstore/v2"
	"gorm.io/gorm"
	"movie/config"
	"time"
)

func NewSession(db *gorm.DB) *Session {
	store := gormstore.New(db, []byte(config.SessionSecret))
	store.MaxAge(25200)                         // 设置session存活时间
	go store.PeriodicCleanup(24*time.Hour, nil) // 隔一天执行一次回收操作
	return &Session{
		ss: store,
	}
}
