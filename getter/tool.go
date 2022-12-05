package getter

import (
	"crypto/tls"
	"io"
	"movie/util"
	"net/http"
	"regexp"
	"strconv"
	"strings"
	"sync/atomic"
	"time"

	"github.com/tidwall/gjson"
)

// 采集content
func (here *Getter) getContent(id int) {
	c := newHttpHandle()
	res, err := c.Get(here.url + "?ac=detail&ids=" + strconv.Itoa(id))
	if err != nil {
		util.Logger.Panic("getter get content failed, err:", err)
		// panic后通过外部的recover来重新获取json
	}
	defer res.Body.Close()
	// 获取body
	body, _ := io.ReadAll(res.Body)

	// 获取所属采集类号
	class := int(gjson.Get(string(body), "list.0.type_id").Value().(float64))

	if !db.JudgeClass(here.id, uint(class)) {
		return
	}

	// 获取影片名
	name := gjson.Get(string(body), "list.0.vod_name").Value().(string)

	// 获取图片封面地址
	pic := gjson.Get(string(body), "list.0.vod_pic").Value().(string)
	pic = urlHandle(pic)

	// 获取主演列表
	actor := gjson.Get(string(body), "list.0.vod_actor").Value().(string)

	// 获取导演
	director := gjson.Get(string(body), "list.0.vod_director").Value().(string)

	// 获取时长
	duration := gjson.Get(string(body), "list.0.vod_duration").Value().(string)

	// 获取简介
	description := gjson.Get(string(body), "list.0.vod_content").Value().(string)
	description = desHandle(description) // 净化功能

	// 获取播放链接
	url := gjson.Get(string(body), "list.0.vod_play_url").Value().(string)
	url = urlHandle(url)

	// 获取属于的source
	belong := here.id
	util.Logger.Info("collect resource station called ", here.name, "get a film called", name)
	err = db.AddContent(id, name, pic, actor, director, duration, description, url, class, belong)
	if err != nil {
		util.Logger.Error("getter get content, store the data to database failed, err:", err)
	}
	// 每当获取完一条信息后就尝试休眠一秒
	time.Sleep(1 * time.Second)
}

// url处理函数
func urlHandle(s string) string {
	return strings.Replace(s, "\\/", "/", -1)
}

// recover
func protect() {
	err := recover()
	if err != nil {
		util.Logger.Error("some error occurred when get, err:", err)
	}
}

// 净化描述、去除html标签、去除头尾空格
func desHandle(s string) string {
	return regexp.MustCompile(`<[^>]+>|(^\s*)|(\s*$)|&nbsp;`).ReplaceAllString(s, "")
}

func newAtomicBool() *atomic.Value {
	var value atomic.Value
	value.Store(false)
	return &value
}

func newHttpHandle() *http.Client {
	return &http.Client{
		Transport: &http.Transport{
			TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
		},
	}
}
