package proxy

import (
	"crypto/tls"
	"movie/util"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
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

	tr := &http.Transport{
		TLSClientConfig: &tls.Config{
			InsecureSkipVerify: true,
		},
	}

	client := &http.Client{Transport: tr}

	// 进行请求
	resp, err := client.Get(url)
	if err != nil {
		util.Logger.Errorf("client get server source failed, err is %s", err)
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
