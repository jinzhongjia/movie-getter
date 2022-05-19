package manager

import (
	database "movie/db"
	"movie/getter"
)

type Manager struct {
	Db      *database.Db
	Getters map[string]*getter.Getter
}

func NewManager() *Manager {
	db := database.NewDb()
	getters := getter.SetDb(db)

	newManager := &Manager{
		Db:      db,
		Getters: getters,
	}
	return newManager
}

func (here *Manager) Close() {
	here.Db.Close()
}


