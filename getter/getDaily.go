package getter

import (
	"io/ioutil"
	"net/http"
	"strconv"
	"time"

	"github.com/tidwall/gjson"
)

// 获取最近24小时更新的内容
func (here *Getter) GetDaily() {
	t := time.NewTicker(24 * time.Hour)
	defer t.Stop()
	for {
		select {
		case <-here.ctx.Done():
			// 被取消了，返回
			return
		case <-t.C:
			here.getDaily()
		}
	}

}

// 获取最近24小时更新的内容子执行
func (here *Getter) getDaily() {
	pgCount := here.getPgCountDaily()
	for pg := 1; pg <= pgCount; pg++ {
		// 请求最近列表
		list := here.getListDaily(pg)
		for _, v := range list {
			id := int(v.Value().(float64))
			here.getContent(id)
		}
		// 再次请求进行更新页数
		pgCount = here.getPgCountDaily()

	}
}

// 获取最近24小时更新内容页数
func (here *Getter) getPgCountDaily() int {
	res, _ := http.Get(here.url + "?ac=list&h=24")
	body, _ := ioutil.ReadAll(res.Body)
	pageCount := gjson.Get(string(body), "pagecount").Value()
	return int(pageCount.(float64))
}

// 请求最近列表
func (here *Getter) getListDaily(pg int) []gjson.Result {
	res, _ := http.Get(here.url + "?ac=list&h=24&pg=" + strconv.Itoa(pg))
	body, _ := ioutil.ReadAll(res.Body)
	list := gjson.Get(string(body), "list.#.vod_id").Array()
	return list
}
