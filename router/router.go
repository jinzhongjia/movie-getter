package router

import (
	mm "movie/manager"
	"movie/proxy"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

/*

这里是一段屎一样的代码，后面需要重写这里的路由逻辑

*/

func Router(r *gin.Engine, manager *mm.Manager) {
	// 图片代理
	r.GET("/img/proxy", proxy.Proxy)
	// 关闭全局采集
	r.GET("/user/stop", func(_ *gin.Context) {
		manager.GetStop()
	})
	// 开启全局采集
	r.GET("/user/start", func(_ *gin.Context) {
		manager.GetStart()
	})

	// 关闭采集
	r.GET("/user/stop/:id", func(c *gin.Context) {
		idV := c.Param("id")
		id, err := strconv.Atoi(idV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		manager.GetStopById(uint(id))
		c.Status(http.StatusOK)
	})

	// 开启采集
	r.GET("/user/start/:id", func(c *gin.Context) {
		idV := c.Param("id")
		id, err := strconv.Atoi(idV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		manager.GetStartById(uint(id))
		c.Status(http.StatusOK)

	})
	// 搜索功能
	r.POST("/search", func(c *gin.Context) {
		keyword := c.PostForm("keyword")
		if keyword == "" {
			c.Status(http.StatusBadRequest)
			return
		}
		contents, err := manager.SearchContent(keyword)
		if err != nil {
			c.Status(http.StatusInternalServerError)
			return
		}
		c.JSON(http.StatusOK, contents)
	})

	// 获取影片信息
	r.GET("/play/:id", func(c *gin.Context) {
		idV := c.Param("id")
		id, err := strconv.Atoi(idV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		movie, err := manager.GetContent(uint(id))
		if err != nil {
			c.Status(http.StatusInternalServerError)
			return
		}
		c.JSON(http.StatusOK, movie)
	})

	r.GET("/class/data", func(c *gin.Context) {
		contents, _, _ := manager.Db.BrowseContentByCategory(1, 10, 1)
		// fmt.Printf("pgCount: %v\n", pgCount)
		c.JSON(http.StatusOK, contents)

	})

}
