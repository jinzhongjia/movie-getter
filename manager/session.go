package manager

import (
	"net/http"
)

// SessionGet get 操作
func (here *Manager) SessionGet(r *http.Request, key string) interface{} {
	return here.session.Get(r, key)
}

// SessionInit 登陆后进行的session初始化操作
func (here *Manager) SessionInit(w http.ResponseWriter, r *http.Request, long bool, kv map[interface{}]interface{}) {
	here.session.Init(w, r, long, kv)
}

// SessionSet set 操作
func (here *Manager) SessionSet(w http.ResponseWriter, r *http.Request, kv map[interface{}]interface{}) {
	here.session.Set(w, r, kv)
}

// SessionDestroy destroy 操作
func (here *Manager) SessionDestroy(w http.ResponseWriter, r *http.Request) {
	here.session.Destroy(w, r)
}
