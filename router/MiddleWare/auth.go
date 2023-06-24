package MiddleWare

import (
	mm "movie/manager"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Auth(manager *mm.Manager) func(*gin.Context) {
	return func(c *gin.Context) {
		err := manager.SessionGet(c.Request, "login")
		if err == nil {
			c.AbortWithStatus(http.StatusUnauthorized)
			return
		}
		c.Next()
	}
}
