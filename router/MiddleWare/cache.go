package MiddleWare

import (
	"bytes"
	"crypto/md5"
	"encoding/hex"
	"time"

	"github.com/bluele/gcache"
	"github.com/gin-gonic/gin"
)

var gc gcache.Cache = gcache.New(20).
	LRU().
	Expiration(time.Hour * 4).
	Build()

type CacheStruct struct {
	status      int
	contentType string
	data        []byte
}

type bodyLogWriter struct {
	gin.ResponseWriter
	body *bytes.Buffer
}

func (w bodyLogWriter) Write(b []byte) (int, error) {
	w.body.Write(b)
	return w.ResponseWriter.Write(b)
}

func Cache() gin.HandlerFunc {
	return func(c *gin.Context) {
		if c.Request.Method == "POST" || c.Request.Method == "GET" {
			hash := URL_hash(c)
			value, err := gc.Get(hash)
			if err == nil {
				res := value.(CacheStruct)
				c.Data(res.status, res.contentType, res.data)
				c.Abort()
				// fmt.Println("命中缓存")
				return
			}
			// fmt.Println("没命中缓存")
			blw := &bodyLogWriter{body: bytes.NewBufferString(""), ResponseWriter: c.Writer}
			c.Writer = blw
			c.Next()
			gc.Set(hash, CacheStruct{
				status:      c.Writer.Status(),
				contentType: c.Writer.Header().Get("Content-Type"),
				data:        blw.body.Bytes(),
			})
		}
	}
}

func URL_hash(c *gin.Context) string {
	c.Request.ParseForm()
	URL := c.Request.URL.Path + "?" + c.Request.Form.Encode()
	c1 := md5.Sum([]byte(URL))
	return hex.EncodeToString(c1[:])
}
