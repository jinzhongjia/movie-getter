package main

import (
	"fmt"
	"movie/config"
	"movie/manager"
	"movie/router"
	"movie/router/MiddleWare"
	"movie/util"

	"github.com/gin-gonic/gin"
)

// TODO manager add Logger
// TODO db add Logger
// TODO getter add logger

func main() {
	// 调整为生产模式
	gin.SetMode(gin.ReleaseMode)

	// 构造manager
	manager := manager.NewManager()

	r := gin.Default()
	{
		// 处理跨域
		r.Use(MiddleWare.Cors())
		router.Static(r)
		// 配置路由
		router.Router(r, manager)
	}

	fmt.Println("Version:", util.Version)
	util.Logger.Info("Status is OK, listen to ", config.Addr)

	// 监听端口默认为localhost:8080
	err := r.Run(config.Addr)
	if err != nil {
		util.Logger.Fatal("Listen port failed", config.Addr)
	}
}
