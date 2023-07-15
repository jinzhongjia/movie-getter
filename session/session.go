package session

import (
	"movie/config"
	"time"

	"github.com/wader/gormstore/v2"
	"gorm.io/gorm"
)

// NewSession 构造函数
func NewSession(db *gorm.DB) *gormstore.Store {
	store := gormstore.New(db, []byte(config.SessionSecret))
	store.MaxAge(25200)                                           // 设置session存活时间
	go store.PeriodicCleanup(24*time.Hour, make(<-chan struct{})) // 隔一天执行一次回收操作
	return store
}
