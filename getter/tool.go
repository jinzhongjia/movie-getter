package getter

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/sirupsen/logrus"
	"github.com/tidwall/gjson"
)

// 采集content
func (here *Getter) getContent(id int) {
	res, _ := http.Get(here.url + "?ac=detail&ids=" + strconv.Itoa(id))
	body, _ := ioutil.ReadAll(res.Body)

	// 获取所属采集类号
	class := int(gjson.Get(string(body), "list.0.type_id").Value().(float64))

	if !db.JudgeClass(class, here.alias) {
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

	// 获取播放链接
	url := gjson.Get(string(body), "list.0.vod_play_url").Value().(string)
	url = urlHandle(url)

	// 获取属于的source
	belong := here.alias
	fmt.Println("采集资源库", here.name, "获取影片：", name)
	db.AddContent(id, name, class, pic, actor, director, duration, description, url, belong)

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
		logrus.Error("采集发生错误：", err)
	}
}
