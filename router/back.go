package router

import (
	mm "movie/manager"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func back(r *gin.Engine, manager *mm.Manager) {

	user := r.Group("/user")
	// user.Use() // 使用鉴权中间件
	{
		// 关闭全局采集
		user.GET("/stop", func(_ *gin.Context) {
			manager.GetStop()
		})

		// 开启全局采集
		user.GET("/start", func(_ *gin.Context) {
			manager.GetStart()
		})

		// 关闭采集
		user.GET("/stop/:id", func(c *gin.Context) {
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
		user.GET("/start/:id", func(c *gin.Context) {
			idV := c.Param("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				c.Status(http.StatusBadRequest)
				return
			}
			manager.GetStartById(uint(id))
			c.Status(http.StatusOK)

		})

		// 获取所有的source
		user.GET("/source/all", func(c *gin.Context) {
			sources, err := manager.GetSource()
			if err != nil {
				c.Status(http.StatusInternalServerError)
				return
			}
			c.JSON(http.StatusOK, sources)
		})

		// 添加source
		user.POST("/source/add", func(c *gin.Context) {
			name := c.PostForm("name")
			url := c.PostForm("url")
			manager.AddSource(name, url)
			c.Status(http.StatusOK)
		})

		// 删除source
		user.POST("/source/del", func(c *gin.Context) {
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
		user.GET("/category/all", func(c *gin.Context) {
			categories, err := manager.GetCategory()
			if err != nil {
				c.Status(http.StatusInternalServerError)
				return
			}
			c.JSON(http.StatusOK, categories)
		})

		// 创建一个分类
		user.POST("/category/add", func(c *gin.Context) {
			name := c.PostForm("name")
			if manager.AddCategory(name) {
				c.Status(http.StatusOK)
				return
			}
			c.Status(http.StatusBadRequest)
		})

		// 删除分类
		user.POST("/category/del", func(c *gin.Context) {
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
		user.GET("/class/all/:id", func(c *gin.Context) {
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
		user.POST("/class/changeGet", func(c *gin.Context) {
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
		user.POST("/class/distribute", func(c *gin.Context) {
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

}
