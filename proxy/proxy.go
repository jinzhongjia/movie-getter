package proxy

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

func Proxy(c *gin.Context) {
	// 获取url参数
	url := c.Query("url")

	// 去除头尾空格
	url = strings.TrimSpace(url)

	// 判断是否为空
	if url == "" {
		c.Status(http.StatusBadRequest)
		return
	}

	// 进行请求
	resp, err := http.Get(url)
	if err != nil {
		logrus.Warn("proxy request source failed!", err)
		c.Status(http.StatusBadGateway)
		return
	}
	defer resp.Body.Close()

	header := make(map[string]string)
	header["content-disposition"] = resp.Header.Get("content-disposition")

	c.DataFromReader(
		resp.StatusCode,
		resp.ContentLength,
		resp.Header.Get("content-type"),
		resp.Body,
		header,
	)
}
