package getter

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"
	"time"

	"github.com/tidwall/gjson"
)

// 获取最近24小时更新的内容
func (here *Getter) GetDaily() {
	fmt.Println(here.name, "开始每日采集")
	t := time.NewTicker(8 * time.Hour)
	defer t.Stop()
	here.getDaily()
	for {
		select {
		case <-here.ctx_daily.Done():
			// 被取消了，返回
			return
		case <-t.C:
			here.getDaily()
		}
	}

}

// 获取最近24小时更新的内容子执行
func (here *Getter) getDaily() {
	defer protect()
	// 获取页数
	pgCount := here.getPgCountDaily()
	// 遍历页数
	for pg := 1; pg <= pgCount; pg++ {
		// 根据页数请求最近采集
		list := here.getListDaily(pg)

		// 逻辑判断是否允许采集
		for _, v := range list {
			select {
			case <-here.ctx_daily.Done():
				// 被取消了，返回
				return
			default:
				// 默认继续采集
				id := int(v.Value().(float64))
				here.getContent(id)
			}

		}
		// 再次请求进行更新页数
		pgCount = here.getPgCountDaily()

	}
}

// 获取最近24小时更新内容页数
func (here *Getter) getPgCountDaily() int {
	res, _ := http.Get(here.url + "?ac=list&h=9")
	body, _ := ioutil.ReadAll(res.Body)
	pageCount := gjson.Get(string(body), "pagecount").Value()
	return int(pageCount.(float64))
}

// 请求最近列表
func (here *Getter) getListDaily(pg int) []gjson.Result {
	res, _ := http.Get(here.url + "?ac=list&h=9&pg=" + strconv.Itoa(pg))
	body, _ := ioutil.ReadAll(res.Body)
	list := gjson.Get(string(body), "list.#.vod_id").Array()
	return list
}
