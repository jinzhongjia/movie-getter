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

// 登陆后进行的session初始化操作
func (here *Manager) SessionInit(w http.ResponseWriter, r *http.Request, long bool) {
	session, err := here.session.Get(r, "data")
	if err != nil {
		logrus.Error(err)
	}
	session.Options.SameSite = http.SameSiteNoneMode
	session.Options.Secure = true
	if long {
		session.Options.MaxAge = 2592000
	}
	session.Save(r, w)
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

// destroy 操作
func (here *Manager) Session_Destroy(w http.ResponseWriter, r *http.Request) {
	session, err := here.session.Get(r, "data")
	if err != nil {
		logrus.Error(err)
	}
	session.Options.MaxAge = -1
	session.Save(r, w)
	here.session.Cleanup()
}
