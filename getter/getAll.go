package getter

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/tidwall/gjson"
)

func (here *Getter) GetAll() {
	for {
		select {
		case <-here.ctx_all.Done():
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
		// 添加一个逻辑，判断是否允许采集
		select {
		case <-here.ctx_all.Done():
			// 被取消了，返回
			return
		default:
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
