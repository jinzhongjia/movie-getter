package getter

import (
	"io"
	"movie/util"
	"strconv"

	"github.com/tidwall/gjson"
)

// 获取最近更新的内容子执行
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
			case <-here.ctx.Done():
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

// 获取最近更新内容页数
func (here *Getter) getPgCountDaily() int {
	c := newHttpHandle()
	res, err := c.Get(here.url + "?ac=list&h=" + strconv.Itoa(GetInterval()))
	if err != nil {
		util.Logger.Panic("getter get recent the resource station called", here.name, "getting page failed, err:", err)
		// panic("采集资源站“" + here.name + "获取采集页数失败")
	}
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)
	pageCount := gjson.Get(string(body), "pagecount").Value()
	return int(pageCount.(float64))
}

// 请求最近列表
func (here *Getter) getListDaily(pg int) []gjson.Result {
	c := newHttpHandle()
	res, err := c.Get(
		here.url + "?ac=list&h=" + strconv.Itoa(GetInterval()) + "&pg=" + strconv.Itoa(pg),
	)
	if err != nil {
		util.Logger.Panic("getter get recent the resource station called", here.name, "list failed, err:", err)
		// panic("采集资源站“" + here.name + "获取采集页数失败")
	}
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)
	list := gjson.Get(string(body), "list.#.vod_id").Array()
	return list
}
