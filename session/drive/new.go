package drive

import (
	"gorm.io/gorm"
	"movie/db"
	_type "movie/db/type"
	"movie/session"
	ssGorm "movie/session/drive/gormDb"
)

func NewSession(db db.Db, dbType int) session.Session {
	var result session.Session
	switch dbType {
	case _type.Gorm:
		result = ssGorm.NewSession(db.DbGet().(*gorm.DB))
	case _type.Redis:
		// 返回redis
	case _type.Mongo:
		// 返回mongo的句柄
	}
	return result
}
