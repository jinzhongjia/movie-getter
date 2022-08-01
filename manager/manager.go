package manager

import (
	database "movie/db"
	"movie/db/gormDb"
	"movie/getter"
	ss "movie/session"

	"github.com/wader/gormstore/v2"
)

type Manager struct {
	db      database.Db             // db 部分
	getters map[uint]*getter.Getter // getter部分
	session *gormstore.Store        // session 部分
}

func NewManager() *Manager {
	db := gormDb.NewDb()                     // 获取数据库db
	getters := getter.SetDb(db)              // 从数据库获取所有的资源地址构建getter
	session := ss.NewSession(db.DbGetGorm()) // 开始构建session

	newManager := &Manager{
		db:      db,
		getters: getters,
		session: session,
	}
	// for _, v := range newManager.getters {
	// 	v.StartGet()
	// }
	return newManager
}
