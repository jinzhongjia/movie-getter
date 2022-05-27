package router

import (
	mm "movie/manager"
	"movie/proxy"

	"github.com/gin-gonic/gin"
)

/*

这里是一段屎一样的代码，后面需要重写这里的路由逻辑

*/

func Router(r *gin.Engine, manager *mm.Manager) {
	// 图片代理
	r.GET("/img/proxy", proxy.Proxy)
	// 关闭全局采集
	r.GET("/user/stop", func(_ *gin.Context) {
		manager.GetStop()
	})
	// 开启全局采集
	r.GET("/user/start", func(_ *gin.Context) {
		manager.GetStart()
	})
	// r.GET("/user/stop/:id", func(c *gin.Context) {
	// 	idV := c.Param("id")

	// 	manager.GetStopById()
	// })
	// r.GET("/user/start/:id", func(ctx *gin.Context) {})

}
