package main

import (
	"movie/manager"
	"movie/router"

	"github.com/gin-gonic/gin"
)

func main() {

	gin.SetMode(gin.ReleaseMode)
	// f, _ := os.OpenFile("cpu.pprof", os.O_CREATE|os.O_RDWR, 0644)
	// defer f.Close()
	// pprof.StartCPUProfile(f)
	// defer pprof.StopCPUProfile()
	manager := manager.NewManager()

	// manager.AddSource("天空", "https://api.tiankongapi.com/api.php/provide/vod/")
	// manager.AddSource("卧龙", "https://collect.wolongzyw.com/api.php/provide/vod/")
	// manager.GetStart()
	// for {
	// 	//此处的自旋会导致高cpu占用
	// }
	// time.Sleep(1 * time.Minute)
	// manager.AddCategory("动作")
	// manager.DistributeClass(6, 1)
	// fmt.Println(manager.Db.JudgeClass(1, 34))
	// fmt.Println(manager.Db.GetClassIdBySourceId(1,7))
	r := gin.Default()
	router.Router(r, manager)
	//监听端口默认为8080
	r.Run("127.0.0.1:8000")

}
