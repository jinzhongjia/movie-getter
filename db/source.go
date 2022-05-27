package db

import (
	"io/ioutil"
	"net/http"

	"github.com/tidwall/gjson"
)

// 添加source
func (here *Db) AddSource(name string, url string) (uint, bool) {
	source := &Source{
		Name: name,
		Url:  url,
	}
	db := here.db.Create(source)
	if db.Error != nil {
		return source.ID, false
	}
	here.sourceInit(url, source.ID)
	return source.ID, true
}

// 更新资源库名字
func (here *Db) UpdateSourceName(oldName string, newName string) error {
	db := here.db.Model(&Source{}).Where("name = ?", oldName).Update("name", newName)
	return db.Error
}

// 更新资源库的地址
func (here *Db) UpdateSourceUrl(oldUrl string, newUrl string) error {
	db := here.db.Model(&Source{}).Where("url = ?", oldUrl).Update("url", newUrl)
	return db.Error
}

// 删除资源库
func (here *Db) DelSource(id uint) error {
	db := here.db.Select("Class", "Content").Delete(&Source{
		ID: id,
	})
	return db.Error
}

// 更新source的ok状态
func (here *Db) UpdateSourceOk(id uint, status bool) error {
	db := here.db.Model(&Source{
		ID: id,
	}).Update("ok", status)
	return db.Error
}

// 获取所有的source
func (here *Db) AllSource() ([]Source, error) {
	var sources []Source
	db := here.db.Find(&sources)
	return sources, db.Error
}

// 更新source采集的页数
func (here *Db) UpdateSourcePg(id uint, pg int) error {
	db := here.db.Model(&Source{
		ID: id,
	}).Update("pg", pg)
	return db.Error
}

// 资源库初始化
func (here *Db) sourceInit(url string, sourceId uint) error {
	res, err := http.Get(url)
	if err != nil {
		return err
	}
	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)
	classes := gjson.Get(string(body), "class").Array()
	for _, vv := range classes {
		v := vv.Value().(map[string]interface{})
		name := v["type_name"].(string)
		class_Id := int(v["type_id"].(float64))
		here.AddClass(sourceId, name, class_Id)
	}
	return nil
}
