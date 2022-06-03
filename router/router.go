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

	front(r, manager) // 前台接口
	back(r, manager)  // 后台接口
}
