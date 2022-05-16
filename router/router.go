package router

import (
	"movie/manager"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

func Router(r *gin.Engine, manager *manager.Manager) {
	r.GET("/user/spider/stop", func(c *gin.Context) {
		manager.GetStop()
		c.String(http.StatusOK, "stop")
	})
	r.GET("/user/spider/start", func(c *gin.Context) {
		manager.GetStart()
		c.String(http.StatusOK, "start")
	})
	r.GET("/user/exit", func(ctx *gin.Context) {
		manager.GetStop()
		go func() {
			time.Sleep(20 * time.Second)
			manager.Close()
			os.Exit(0)
		}()
	})
	r.POST("/search", func(c *gin.Context) {
		keywords := c.PostForm("keywords")
		c.JSON(http.StatusOK, manager.Search(keywords))
	})
	r.GET("/play/:belong/:id", func(c *gin.Context) {
		belong := c.Param("belong")
		idV := c.Param("id")
		id, err := strconv.Atoi(idV)
		if err != nil {
			c.String(http.StatusBadRequest, "wrong id")
		}
		c.JSON(http.StatusOK, manager.GetContent(belong, id))
	})
}
