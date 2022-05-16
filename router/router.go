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
			time.Sleep(5 * time.Second)
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

	r.POST("/user/source/add", func(c *gin.Context) {
		name := c.PostForm("name")
		url := c.PostForm("url")
		manager.AddSource(name, url)
		c.Status(http.StatusOK)
	})

	r.POST("/user/source/del", func(c *gin.Context) {
		url := c.PostForm("url")
		err := manager.DelSource(url)
		if err != nil {
			c.String(http.StatusInternalServerError, "err")
			return
		}
		c.Status(http.StatusOK)
	})

	r.POST("/user/source/updateName", func(c *gin.Context) {
		oldName := c.PostForm("oldName")
		newName := c.PostForm("newName")
		err := manager.UpdateSourceName(oldName, newName)
		if err != nil {
			c.String(http.StatusInternalServerError, "err")
			return
		}
		c.Status(http.StatusOK)
	})

	r.POST("/movie/:category", func(c *gin.Context) {
		category := c.Param("category")
		numV := c.Param("num")
		var num int
		if numV == "" {
			num = 20
		} else {
			var err error
			num, err = strconv.Atoi(numV)
			if err != nil {
				c.String(http.StatusBadRequest, "wrong num")
				return
			}
		}

		c.JSON(http.StatusOK, manager.GetContentByCategory(category, num))
	})
}
