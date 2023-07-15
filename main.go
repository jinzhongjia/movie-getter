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

func main() {
	// 调整为生产模式
	gin.SetMode(gin.ReleaseMode)

	// 构造manager
	manager := manager.NewManager()

	// gin句柄构建
	r := gin.New()

	// 使用默认的gin恢复句柄，防止程序奔溃
	r.Use(gin.Recovery())
	{
		// 处理跨域
		r.Use(MiddleWare.Cors())
		// 静态资源映射
		router.Static(r)
		// 配置路由
		router.Router(r, manager)
	}

	// 打印版本和监听地址
	fmt.Printf("Version:%s\n", util.Version)
	fmt.Printf("Status is OK, listen to http://%s\n", config.Addr)

	// 监听端口默认为localhost:8080
	err := r.Run(config.Addr)
	if err != nil {
		util.Logger.Fatalf("Listen port failed, addr is %s\n", config.Addr)
	}
}
