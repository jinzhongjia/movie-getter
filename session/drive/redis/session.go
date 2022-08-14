package redis

import (
	"github.com/rbcervilla/redisstore/v8"
	"github.com/sirupsen/logrus"
	"net/http"
)

type Session struct {
	ss *redisstore.RedisStore
}

func (s *Session) Init(w http.ResponseWriter, r *http.Request, long bool, kv map[interface{}]interface{}) {
	session, err := s.ss.Get(r, "data")
	if err != nil {
		logrus.Error(err)
	}
	session.Options.SameSite = http.SameSiteNoneMode // 设置cookie的策略
	session.Options.Secure = true                    // 设置cookie策略
	if long {
		session.Options.MaxAge = 2592000 // 设置存活时间
	}
	for k, v := range kv {
		session.Values[k] = v
	}
	err = session.Save(r, w)
	if err != nil {
		logrus.Error("session save failed!", err)
	}
}

func (s *Session) Set(w http.ResponseWriter, r *http.Request, kv map[interface{}]interface{}) {
	session, err := s.ss.Get(r, "data")
	if err != nil {
		logrus.Error(err)
	}
	for k, v := range kv {
		session.Values[k] = v
	}
	err = session.Save(r, w)
	if err != nil {
		logrus.Error("session save failed!", err)
	}
}
func (s *Session) Get(r *http.Request, key string) interface{} {
	session, err := s.ss.Get(r, "data")
	if err != nil {
		logrus.Error(err)
	}
	return session.Values[key].(string)
}
func (s *Session) Delete(w http.ResponseWriter, r *http.Request) {
	session, err := s.ss.Get(r, "data")
	if err != nil {
		logrus.Error(err)
	}
	session.Options.MaxAge = -1
	err = session.Save(r, w)
	if err != nil {
		logrus.Error("session save failed!", err)
	}
	// 这里不需要自行进行cleanup，工作由redis完成
}
