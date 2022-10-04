package router

import (
	"log"
	mm "movie/manager"
	"movie/util"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func back(r *gin.Engine, manager *mm.Manager) {
	// 登录函数处理
	r.POST("/user/login", func(c *gin.Context) {
		account := c.PostForm("account")
		password := c.PostForm("password")
		long := c.PostForm("long") // 获取参数是否要长时间无需登录
		if manager.SessionGet(c.Request, "login") == nil {
			// 验证登录
			if !manager.Login(account, password) {
				c.Status(http.StatusForbidden)
				return
			}
			kv := make(map[interface{}]interface{})
			{
				kv["login"] = true
				kv["account"] = account
			}
			manager.SessionInit(c.Writer, c.Request, long == "true", kv) // 进行相关的初始化操作，并且判断是否需要cookie长期有效
		}

		c.Status(http.StatusOK)
	})

	// 获取版本号
	r.GET("/system/version", func(c *gin.Context) {
		c.String(http.StatusOK, util.Version)
	})

	// 路由组定义
	user := r.Group("/user")

	// 路由组中间件，用于鉴权
	user.Use(func(c *gin.Context) {
		err := manager.SessionGet(c.Request, "login")
		if err == nil {
			c.AbortWithStatus(http.StatusUnauthorized)
			return
		}
		c.Next()
	})

	// 路由组逻辑处理
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

		// 全局影片列表
		user.POST("/list", func(c *gin.Context) {
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
			// 执行检索
			movies, pgCount, err := manager.ContentList(num, pg)
			if err != nil {
				c.Status(http.StatusInternalServerError)
				return
			}
			movie := Movie{
				Movies:  movies,
				PgCount: pgCount,
			}
			// 编码json
			c.JSON(http.StatusOK, movie)
		})

		// 全局搜索影片
		user.POST("/search", func(c *gin.Context) {
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
			// 执行搜索操作
			movies, pgCount, err := manager.SearchContent_bk(keyword, num, pg)
			if err != nil {
				c.Status(http.StatusInternalServerError)
				return
			}
			movie := Movie{
				Movies:  movies,
				PgCount: pgCount,
			}
			// 编码json
			c.JSON(http.StatusOK, movie)
		})

		// 删除影片
		user.POST("/del", func(c *gin.Context) {
			// 获取contentId
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				c.Status(http.StatusBadRequest)
				return
			}
			if manager.DelContent(uint(id)) != nil {
				c.Status(http.StatusInternalServerError)
				return
			}
			c.Status(http.StatusOK)
		})

		// 获取所有影片数目
		user.GET("/count", func(c *gin.Context) {
			c.String(http.StatusOK, strconv.Itoa(manager.ContentCount()))
		})

		// 采集源影片列表
		user.POST("/source/list", func(c *gin.Context) {
			// 获取sourceId
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
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

			// 执行检索
			movies, pgCount, err := manager.ContentList_Source(uint(id), num, pg)
			if err != nil {
				c.Status(http.StatusInternalServerError)
				return
			}
			movie := Movie{
				Movies:  movies,
				PgCount: pgCount,
			}
			// 编码json
			c.JSON(http.StatusOK, movie)
		})

		// 采集源影片搜索
		user.POST("/source/search", func(c *gin.Context) {
			// 获取sourceId
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				c.Status(http.StatusBadRequest)
				return
			}
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
			// 执行搜索操作
			movies, pgCount, err := manager.SearchContent_bk_Source(uint(id), keyword, num, pg)
			if err != nil {
				c.Status(http.StatusInternalServerError)
				return
			}
			movie := Movie{
				Movies:  movies,
				PgCount: pgCount,
			}
			// 编码json
			c.JSON(http.StatusOK, movie)
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

		// 重新采集
		user.POST("/source/reGet", func(c *gin.Context) {
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				c.Status(http.StatusBadRequest)
				return
			}
			if manager.ReGet(uint(id)) != nil {
				c.Status(http.StatusInternalServerError)
				return
			}
			c.Status(http.StatusOK)
		})

		// 删除source
		user.POST("/source/del", func(c *gin.Context) {
			idV := c.PostForm("id")
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

		// 获取某资源库下所有采集类
		user.GET("/source/all_class/:id", func(c *gin.Context) {
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

		// 自建分类影片列表
		user.POST("/category/list", func(c *gin.Context) {
			// 获取categoryId
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
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
			// 执行检索
			movies, pgCount, err := manager.ContentList_Category(uint(id), num, pg)
			if err != nil {
				c.Status(http.StatusInternalServerError)
				return
			}
			movie := Movie{
				Movies:  movies,
				PgCount: pgCount,
			}
			// 编码json
			c.JSON(http.StatusOK, movie)
		})

		// 自建分类影片搜索
		user.POST("/category/search", func(c *gin.Context) {
			// 获取categoryId
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				c.Status(http.StatusBadRequest)
				return
			}
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
			// 执行搜索操作
			movies, pgCount, err := manager.SearchContent_bk_Category(uint(id), keyword, num, pg)
			if err != nil {
				c.Status(http.StatusInternalServerError)
				return
			}
			movie := Movie{
				Movies:  movies,
				PgCount: pgCount,
			}
			// 编码json
			c.JSON(http.StatusOK, movie)
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

		// 采集类影片列表
		user.POST("/class/list", func(c *gin.Context) {
			// 获取categoryId
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
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
			// 执行检索
			movies, pgCount, err := manager.ContentList_Class(uint(id), num, pg)
			if err != nil {
				c.Status(http.StatusInternalServerError)
				return
			}
			movie := Movie{
				Movies:  movies,
				PgCount: pgCount,
			}
			// 编码json
			c.JSON(http.StatusOK, movie)
		})

		// 采集类影片搜索
		user.POST("/class/search", func(c *gin.Context) {
			// 获取sourceId
			idV := c.PostForm("id")
			id, err := strconv.Atoi(idV)
			if err != nil {
				c.Status(http.StatusBadRequest)
				return
			}
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
			// 执行搜索操作
			movies, pgCount, err := manager.SearchContent_bk_Class(uint(id), keyword, num, pg)
			if err != nil {
				c.Status(http.StatusInternalServerError)
				return
			}
			movie := Movie{
				Movies:  movies,
				PgCount: pgCount,
			}
			// 编码json
			c.JSON(http.StatusOK, movie)
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

		// 更新账户
		user.POST("/updateAccount", func(c *gin.Context) {
			account := c.PostForm("account")
			if account == "" {
				c.Status(http.StatusBadRequest)
				return
			}
			oldAccount := manager.SessionGet(c.Request, "account").(string)
			if manager.UpdateAccount(oldAccount, account) != nil {
				c.Status(http.StatusInternalServerError)
				return
			}
			kv := make(map[interface{}]interface{})
			kv["account"] = account
			manager.SessionSet(c.Writer, c.Request, kv)
			c.Status(http.StatusOK)
		})

		// 更新密码
		user.POST("/updatePassword", func(c *gin.Context) {
			password := c.PostForm("password")
			if password == "" {
				c.Status(http.StatusBadRequest)
				return
			}
			account := manager.SessionGet(c.Request, "account").(string)
			if manager.UpdatePassword(account, password) != nil {
				c.Status(http.StatusInternalServerError)
				return
			}
			c.Status(http.StatusOK)
		})

		// 获取采集间隔
		user.GET("getCollectInterval", func(c *gin.Context) {
			c.String(http.StatusOK, strconv.Itoa(manager.GetCollectInterval()))
		})

		// 更新采集间隔
		user.POST("/updateCollectInterval", func(c *gin.Context) {
			intervalV := c.PostForm("interval")
			interval, err := strconv.Atoi(intervalV)
			if err != nil {
				c.Status(http.StatusBadRequest)
				return
			}
			if interval <= 0 {
				interval = 24
			}
			err = manager.UpdateCollectInterval(interval)
			if err != nil {
				c.Status(http.StatusInternalServerError)
				log.Println("update collect interval failed!", err)
				return
			}
			c.Status(http.StatusOK)
		})

		// 登出操作
		user.GET("/logout", func(c *gin.Context) {
			manager.SessionDestroy(c.Writer, c.Request)
			c.Status(http.StatusOK)
		})

	}
}
