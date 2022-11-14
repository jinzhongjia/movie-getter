package router

import (
	mm "movie/manager"
	"movie/router/MiddleWare"
	"net/http"
	"sort"
	"strconv"

	"github.com/gin-gonic/gin"
)

func front(r *gin.Engine, manager *mm.Manager) {
	// 搜索功能
	r.POST("/search", MiddleWare.Cache(), func(c *gin.Context) {
		// 获取关键字
		keyword := c.PostForm("keyword")
		if keyword == "" {
			c.Status(http.StatusBadRequest)
			return
		}
		// 获取页码
		pgV := c.PostForm("pg")
		pg, err := strconv.Atoi(pgV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		// 获取数量
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
	r.GET("/play/:id", MiddleWare.Cache(), func(c *gin.Context) {
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
	r.POST("/category/:id", MiddleWare.Cache(), func(c *gin.Context) {
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

	// 获取分类列表
	r.GET("/allCategory", MiddleWare.Cache(), func(c *gin.Context) {
		categories, err := manager.GetCategory()
		if err != nil {
			c.Status(http.StatusInternalServerError)
			return
		}
		type Category struct {
			ID       uint   `json:"id"`
			Name     string `json:"name"`
			MovieNum int    `json:"movieNum"`
		}
		res := make([]Category, 0)

		for _, v := range categories {
			res = append(res, Category{
				ID:       v.ID,
				Name:     v.Name,
				MovieNum: v.MovieNum,
			})
		}
		c.JSON(http.StatusOK, res)
	})

	// 获取在首页显示的分类
	r.GET("/mainCategory", MiddleWare.Cache(), func(c *gin.Context) {
		categories, err := manager.GetMainCategory()
		if err != nil {
			c.Status(http.StatusInternalServerError)
			return
		}
		sort.Slice(categories, func(i, j int) bool {
			return categories[i].ID < categories[j].ID
		})
		c.JSON(http.StatusOK, categories)
	})
}
