package getter

import (
	"fmt"
	"io/ioutil"
	"strconv"

	"github.com/tidwall/gjson"
)

// 全局采集
func (here *Getter) getAll() {
	defer protect()
	pgCount := here.getPgCount()
	if here.pg >= pgCount {
		here.ok = true
		db.UpdateSourceOk(here.id, here.ok)
		return
	}

	//获取页数
	list := here.getList(pgCount)

	for _, v := range list {
		// 添加一个逻辑，判断是否允许采集
		select {
		case <-here.ctx.Done():
			// 被取消了，返回
			return
		default:
			// fmt.Println("666")
			id := int(v.Value().(float64))
			here.getContent(id)
		}
	}

	// 更新页数
	here.updatePg()
}

// 更新页数
func (here *Getter) updatePg() {
	here.pg++
	db.UpdateSourcePg(here.id, here.pg)
}

// 获取所有采集页数
func (here *Getter) getPgCount() int {
	c := newHttpHandle()
	res, err := c.Get(here.url + "?ac=list")
	if err != nil {
		panic("采集资源站“" + here.name + "“获取采集页数失败")
	}
	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)
	pageCount := gjson.Get(string(body), "pagecount").Value()
	return int(pageCount.(float64))
}

// 获取list
func (here *Getter) getList(pgCount int) []gjson.Result {
	fmt.Println("采集资源站“", here.name, "”，第", here.pg, "页")
	c := newHttpHandle()
	res, err := c.Get(here.url + "?ac=list&pg=" + strconv.Itoa(pgCount-here.pg))
	if err != nil {
		panic("采集资源站“" + here.name + "“获取采集页数失败")
	}
	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)
	list := gjson.Get(string(body), "list.#.vod_id").Array()
	return list
}
