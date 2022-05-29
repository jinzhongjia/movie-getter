package router

import (
	"movie/dist"
	"movie/dist/assets"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Static(r *gin.Engine) {

	//处理首页
	r.GET("/", func(c *gin.Context) {
		c.Header("content-type", "text/html;charset=utf-8")
		c.String(200, dist.Index)
	})
	// 处理ico
	r.GET("/logo.ico", func(c *gin.Context) {
		c.Header("Content-Type", "image/vnd.microsoft.icon")
		c.String(200, string(dist.Icon))
	})
	// 处理静态文件
	r.StaticFS("/assets", http.FS(assets.Assets))
}
