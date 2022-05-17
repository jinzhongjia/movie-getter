package main

import (
	"movie/manager"
	"movie/router"

	"github.com/gin-gonic/gin"
)

func main() {
	gin.SetMode(gin.ReleaseMode)

	manager := manager.NewManager()

	manager.AddSource("天空", "https://api.tiankongapi.com/api.php/provide/vod/")

	r := gin.Default()

	router.Router(r, manager)
	//监听端口默认为8080
	r.Run("127.0.0.1:8000")

}
