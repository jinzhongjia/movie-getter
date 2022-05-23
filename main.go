package main

import (
	"movie/manager"
	"movie/router"
	"os"
	"runtime"
	"time"

	"github.com/gin-contrib/pprof"
	"github.com/gin-gonic/gin"
)

func init() {
	// 这里指定一核运行
	runtime.GOMAXPROCS(1)
}

func main() {
	// 性能分析
	// f, _ := os.OpenFile("cpu.pprof", os.O_CREATE|os.O_RDWR, 0644)
	// defer f.Close()
	// pprof.StartCPUProfile(f)
	// defer pprof.StopCPUProfile()

	gin.SetMode(gin.ReleaseMode)

	manager := manager.NewManager()

	manager.AddSource("天空", "https://api.tiankongapi.com/api.php/provide/vod/")
	manager.AddSource("卧龙", "https://collect.wolongzyw.com/api.php/provide/vod/")

	r := gin.Default()
	pprof.Register(r)
	router.Router(r, manager)

	// 退出函数处理
	r.GET("/user/exit", func(_ *gin.Context) {
		manager.GetStop()
		go func() {
			time.Sleep(3 * time.Second)
			manager.Close()
			// pprof.StopCPUProfile()
			// f.Close()
			os.Exit(0)
		}()
	})
	//监听端口默认为8080
	r.Run("127.0.0.1:8000")

}
