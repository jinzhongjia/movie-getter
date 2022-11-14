package main

import (
	"fmt"
	"movie/config"
	"movie/manager"
	"movie/router"
	"movie/router/MiddleWare"

	"github.com/sirupsen/logrus"

	"github.com/gin-gonic/gin"
)

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

	fmt.Printf("状态正常,开始监听,http://%s/", config.Addr)
	// 监听端口默认为localhost:8080
	err := r.Run(config.Addr)
	if err != nil {
		logrus.Error("the error not handled", err)
	}
}
