package db

import (
	"io/ioutil"
	"net/http"
	"strconv"
	"time"

	"github.com/ostafen/clover"
	"github.com/sirupsen/logrus"
	"github.com/tidwall/gjson"
)

// 添加采集源，根据url判断
func (here *Db) AddSource(name string, url string) (bool, *clover.Document) {
	if !here.existSource(url) {
		doc := clover.NewDocument()
		doc.Set("name", name)
		doc.Set("url", url)
		alias := strconv.Itoa(int(time.Now().Unix()))
		doc.Set("alias", alias)
		doc.Set("pg", 0)
		doc.Set("changer", false) // false代表没采集完成

		// 插入到表中
		here.db.InsertOne("source", doc)

		// 采集类初始化
		here.sourceInit(url, alias)
		return true, doc
	}
	return false, nil
}

func (here *Db) existSource(url string) bool {
	result, _ := here.source.Where(clover.Field("url").Eq(url)).Exists()
	return result
}

func (here *Db) UpdateSourceName(oldName string, newName string) error {
	return here.source.Where(clover.Field("name").Eq(oldName)).Update(map[string]interface{}{"name": newName})
}

func (here *Db) DelSource(url string) error {
	if here.existSource(url) {
		doc, _ := here.source.Where(clover.Field("url").Eq(url)).FindFirst()
		alias := doc.Get("alias").(int64)
		here.source.Where(clover.Field("url").Eq(url)).Delete()
		here.content.Where(clover.Field("belong").Eq(alias)).Delete()
		here.class.Where(clover.Field("belong").Eq(alias)).Delete()
	}
	return nil
}

func (here *Db) GetSource() []*clover.Document {
	result, err := here.source.FindAll()
	if err != nil {
		logrus.Error(err)
	}
	return result
}

func (here *Db) GetSourceByName(name string) *clover.Document {
	result, err := here.source.Where(clover.Field("name").Eq(name)).FindFirst()
	if err != nil {
		logrus.Errorln("the source ", name, ", something error")
	}
	return result
}

func (here *Db) UpdateSourcePgByAlias(alias string, pg int) error {
	return here.source.Where(clover.Field("alias").Eq(alias)).Update(map[string]interface{}{"pg": pg})

}

func (here *Db) UpdateSourceChangerByAlias(alias string, changer bool) error {
	return here.source.Where(clover.Field("alias").Eq(alias)).Update(map[string]interface{}{"changer": changer})
}

// 采集类初始化
func (here *Db) sourceInit(url string, alias string) {
	res, _ := http.Get(url)
	body, _ := ioutil.ReadAll(res.Body)
	value := gjson.Get(string(body), "class")

	for _, v := range value.Array() {
		va := v.Value().(map[string]interface{})
		name := va["type_name"].(string)
		id := int(va["type_id"].(float64))
		here.AddClass(name, id, alias)
	}
}
