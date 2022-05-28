package router

import mm "movie/manager"

type Movie struct {
	Movies  []mm.Movie `json:"movies"`
	PgCount int        `json:"pgCount"`
}
