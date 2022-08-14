package manager

import (
	database "movie/db"
	"movie/db/drive/gormDb"
	"movie/getter"
	"movie/session"
	"movie/session/drive"
)

type Manager struct {
	db      database.Db             // db 部分
	getters map[uint]*getter.Getter // getter部分
	session session.Session         // session 部分
}

/*

 todo 处理根据配置文件构建db句柄

*/

func NewManager() *Manager {
	db := gormDb.NewDb()                         // 获取数据库db  todo ！！！！
	getters := getter.SetDb(db)                  // 从数据库获取所有的资源地址构建getter
	session := drive.NewSession(db, db.DbType()) // 开始构建session

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
