package gormDb

import (
	"movie/util"
	"net/http"

	"github.com/wader/gormstore/v2"
)

type Session struct {
	ss *gormstore.Store
}

func (s *Session) Init(
	w http.ResponseWriter,
	r *http.Request,
	long bool,
	kv map[interface{}]interface{},
) {
	session, err := s.ss.Get(r, "data")
	if err != nil {
		util.Logger.Error("Get session info failed when init session, err:", err)
	}
	// session.Options.SameSite = http.SameSiteNoneMode // 设置cookie的策略
	// session.Options.Secure = true                    // 设置cookie策略
	if long {
		session.Options.MaxAge = 2592000 // 设置存活时间
	}
	for k, v := range kv {
		session.Values[k] = v
	}
	err = session.Save(r, w)
	if err != nil {
		util.Logger.Error("Session saving failed when init session, err:", err)
	}
}

func (s *Session) Set(w http.ResponseWriter, r *http.Request, kv map[interface{}]interface{}) {
	session, err := s.ss.Get(r, "data")
	if err != nil {
		util.Logger.Error("Get session handle failed when set session, err:", err)
	}
	for k, v := range kv {
		session.Values[k] = v
	}
	err = session.Save(r, w)
	if err != nil {
		util.Logger.Error("Session saving failed, err:", err)
	}
}

func (s *Session) Get(r *http.Request, key string) interface{} {
	session, err := s.ss.Get(r, "data")
	if err != nil {
		util.Logger.Error("Get session handle failed when get session, err:", err)
	}

	return session.Values[key]
}

func (s *Session) Destroy(w http.ResponseWriter, r *http.Request) {
	session, err := s.ss.Get(r, "data")
	if err != nil {
		util.Logger.Error("Get session handle failed when destroy session, err:", err)
	}
	session.Options.MaxAge = -1
	err = session.Save(r, w)
	if err != nil {
		util.Logger.Error("Save session failed when destroy session, err:", err)
		return
	}
	s.ss.Cleanup()
}
