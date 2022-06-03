package router

import (
	mm "movie/manager"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func front(r *gin.Engine, manager *mm.Manager) {
	// 搜索功能
	r.POST("/search", func(c *gin.Context) {
		keyword := c.PostForm("keyword")
		if keyword == "" {
			c.Status(http.StatusBadRequest)
			return
		}
		pgV := c.PostForm("pg")
		pg, err := strconv.Atoi(pgV)
		// pg--
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		numV := c.PostForm("num")
		num, err := strconv.Atoi(numV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		movies, pgCount, err := manager.SearchContent(keyword, num, pg)
		if err != nil {
			c.Status(http.StatusInternalServerError)
			return
		}
		movie := Movie{
			Movies:  movies,
			PgCount: pgCount,
		}
		c.JSON(http.StatusOK, movie)
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

	// 获取某个分类下最新的影片
	r.POST("/category/:id", func(c *gin.Context) {
		idV := c.Param("id")
		id, err := strconv.Atoi(idV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		pgV := c.PostForm("pg")
		pg, err := strconv.Atoi(pgV)
		// pg--
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		numV := c.PostForm("num")
		num, err := strconv.Atoi(numV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		movies, pgCount, err := manager.BrowseContentByCategory(uint(id), num, pg)
		if err != nil {
			c.Status(http.StatusInternalServerError)
		}
		movie := Movie{
			Movies:  movies,
			PgCount: pgCount,
		}
		c.JSON(http.StatusOK, movie)
	})

}
