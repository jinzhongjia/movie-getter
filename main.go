package main

import (
	"fmt"
	"movie/config"
	"movie/manager"
	"movie/router"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// func init() {
// 	runtime.GOMAXPROCS(1)
// }

func main() {

	gin.SetMode(gin.ReleaseMode)
	manager := manager.NewManager()

	r := gin.Default()
	{
		//处理跨域
		r.Use(cors.Default())
		router.Static(r)
		//配置路由
		router.Router(r, manager)
	}

	fmt.Println("运行正常，开始监听端口！")
	//监听端口默认为8080
	r.Run(config.Addr)

}
