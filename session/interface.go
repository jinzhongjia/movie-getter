package session

import "net/http"

type Session interface {
	Init(w http.ResponseWriter, r *http.Request, long bool, kv map[interface{}]interface{}) // session 初始化
	Set(w http.ResponseWriter, r *http.Request, kv map[interface{}]interface{})             // 设置值
	Get(r *http.Request, key string) interface{}                                            // 获取值
	Destroy(w http.ResponseWriter, r *http.Request)                                         // 销毁session
}
