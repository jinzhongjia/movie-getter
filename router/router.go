package router

import (
	"movie/manager"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
)

func Router(r *gin.Engine, manager *manager.Manager) {
	r.GET("/get/stop", func(c *gin.Context) {
		manager.GetStop()
		c.String(http.StatusOK, "stop")
	})
	r.GET("/get/start", func(c *gin.Context) {
		manager.GetStart()
		c.String(http.StatusOK, "start")
	})
	r.GET("/stop", func(ctx *gin.Context) {
		manager.GetStop()
		go func() {
			time.Sleep(20 * time.Second)
			manager.Close()
			os.Exit(0)
		}()
	})
	r.POST("/search", func(c *gin.Context) {

	})
}
