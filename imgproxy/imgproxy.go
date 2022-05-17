package imgProxy

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func Img(c *gin.Context) {

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
		fmt.Println(err)
		c.Status(http.StatusBadGateway)
		return
	}
	defer resp.Body.Close()

	// 读取请求的body
	body, _ := ioutil.ReadAll(resp.Body)

	// 写入响应体
	c.Writer.Write(body)

	c.Status(resp.StatusCode)
}
