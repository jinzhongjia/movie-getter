package manager

import (
	"net/http"

	"github.com/sirupsen/logrus"
)

// get 操作
func (here *Manager) Session_Get(r *http.Request, key string) interface{} {
	session, err := here.session.Get(r, "data")
	if err != nil {
		logrus.Error(err)
	}
	return session.Values[key]
}

// set 操作
func (here *Manager) Session_Set(w http.ResponseWriter, r *http.Request, key string, value interface{}) {
	session, err := here.session.Get(r, "data")
	if err != nil {
		logrus.Error(err)
	}
	session.Values[key] = value
	session.Save(r, w)
}
