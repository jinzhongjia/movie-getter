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

	// 获取所有的source
	r.GET("/user/source/all", func(c *gin.Context) {
		sources, err := manager.GetSource()
		if err != nil {
			c.Status(http.StatusInternalServerError)
			return
		}
		c.JSON(http.StatusOK, sources)
	})

	// 添加source
	r.POST("/user/source/add", func(c *gin.Context) {
		name := c.PostForm("name")
		url := c.PostForm("url")
		manager.AddSource(name, url)
		c.Status(http.StatusOK)
	})

	// 删除source
	r.POST("/user/source/del", func(c *gin.Context) {
		idV := c.Param("id")
		id, err := strconv.Atoi(idV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		if manager.DelSource(uint(id)) != nil {
			c.Status(http.StatusInternalServerError)
			return
		}
		c.Status(http.StatusOK)
	})

	// 获取自建分类
	r.GET("/user/category/all", func(c *gin.Context) {
		categories, err := manager.GetCategory()
		if err != nil {
			c.Status(http.StatusInternalServerError)
			return
		}
		c.JSON(http.StatusOK, categories)
	})

	// 创建一个分类
	r.POST("/user/category/add", func(c *gin.Context) {
		name := c.PostForm("name")
		if manager.AddCategory(name) {
			c.Status(http.StatusOK)
			return
		}
		c.Status(http.StatusBadRequest)
	})

	// 删除分类
	r.POST("/user/category/del", func(c *gin.Context) {
		idV := c.PostForm("id")
		id, err := strconv.Atoi(idV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		if manager.DelCategory(uint(id)) != nil {
			c.Status(http.StatusInternalServerError)
			return
		}
		c.Status(http.StatusOK)
	})

	// 获取某资源库下所有采集类
	r.GET("/user/class/all/:id", func(c *gin.Context) {
		idV := c.Param("id")
		id, err := strconv.Atoi(idV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		classes, err := manager.GetClass(uint(id))
		if err != nil {
			c.Status(http.StatusInternalServerError)
			return
		}
		c.JSON(http.StatusOK, classes)
	})

	// 改变class的采集状态是否采集
	r.POST("/user/class/changeGet", func(c *gin.Context) {
		idV := c.PostForm("id")
		id, err := strconv.Atoi(idV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}

		getV := c.PostForm("get")
		get := !(getV == "0")
		if manager.ChangeClassGet(uint(id), get) != nil {
			c.Status(http.StatusInternalServerError)
			return
		}
		c.Status(http.StatusOK)
	})

	// 分配采集类到自建类
	r.POST("/user/class/distribute", func(c *gin.Context) {
		classIdV := c.PostForm("classId")
		classId, err := strconv.Atoi(classIdV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		categoryIdV := c.PostForm("categoryId")
		categoryId, err := strconv.Atoi(categoryIdV)
		if err != nil {
			c.Status(http.StatusBadRequest)
			return
		}
		if manager.DistributeClass(uint(classId), uint(categoryId)) != nil {
			c.Status(http.StatusInternalServerError)
			return
		}
		c.Status(http.StatusOK)
	})
}
