package router

import (
	"io/fs"
	"movie/dist"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Static(r *gin.Engine) {
	// 前台

	{
		front,_ := fs.Sub(dist.Front,"front")
		// 映射index
		r.GET("/", func(c *gin.Context) {
			data, _ := fs.ReadFile(front, "index.html")
			c.Data(http.StatusOK, "text/html;charset=utf-8", data)
		})
		// 映射logo
		r.StaticFileFS("/logo.ico", "logo.ico", http.FS(front))
		assest_tmp, _ := fs.Sub(front, "assets")
		// 映射assets
		r.StaticFS("/assets", http.FS(assest_tmp))
	}
	// 后台
	{
		admin,_ := fs.Sub(dist.Admin,"admin")
		r.StaticFS("/admin", http.FS(admin))
	}
}
