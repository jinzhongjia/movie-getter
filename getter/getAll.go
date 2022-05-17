package getter

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/tidwall/gjson"
)

func (here *Getter) GetAll() {
	for {
		select {
		case <-here.ctx.Done():
			// 被取消了，返回
			return
		default:
			here.getAll()
		}
	}
}

func (here *Getter) getAll() {
	defer protect()
	if here.pg > here.getPgCount() {
		return
	}

	list := here.getList()

	for _, v := range list {
		id := int(v.Value().(float64))
		here.getContent(id)
	}

	// 更新页数
	here.updatePg()
}

// 更新页数
func (here *Getter) updatePg() {
	here.pg++
	db.UpdateSourcePgByAlias(here.alias, here.pg)
}

// 获取所有采集页数
func (here *Getter) getPgCount() int {
	res, _ := http.Get(here.url + "?ac=list")
	body, _ := ioutil.ReadAll(res.Body)
	pageCount := gjson.Get(string(body), "pagecount").Value()
	return int(pageCount.(float64))
}

// 获取list
func (here *Getter) getList() []gjson.Result {
	fmt.Println("采集资源站“", here.name, "”，第", here.pg, "页")
	res, _ := http.Get(here.url + "?ac=list&pg=" + strconv.Itoa(here.pg))
	body, _ := ioutil.ReadAll(res.Body)
	list := gjson.Get(string(body), "list.#.vod_id").Array()
	return list
}

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
	fmt.Println("获取影片：", name)
	db.AddContent(id, name, class, pic, actor, director, duration, description, url, belong)

	// 每当获取完一条信息后就尝试休眠一秒
	time.Sleep(1 * time.Second)
}

// url处理函数
func urlHandle(s string) string {
	return strings.Replace(s, "\\/", "/", -1)
}
