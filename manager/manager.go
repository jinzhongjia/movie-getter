package manager

import (
	database "movie/db"
	"movie/getter"
)

type Manager struct {
	Db      *database.Db
	Getters map[uint]*getter.Getter
}

func NewManager() *Manager {
	db := database.NewDb()
	getters := getter.SetDb(db)

	newManager := &Manager{
		Db:      db,
		Getters: getters,
	}
	for _, v := range newManager.Getters {
		v.StartGet()
	}
	return newManager
}
