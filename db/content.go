package db

import (
	"regexp"
	"time"

	"github.com/ostafen/clover"
)

func (here *Db) AddContent(
	id int, name string, class int,
	pic string, actor string, director string,
	duration string, description string, url string,
	belong string,
) {
	value := make(map[string]interface{})
	{
		value["id"] = id
		value["name"] = name
		value["class"] = class
		value["pic"] = pic
		value["actor"] = actor
		value["director"] = director
		value["duration"] = duration
		value["description"] = description
		value["url"] = url
		value["belong"] = belong
		value["stamp"] = time.Now().Unix()
	}
	// 存在的话更新数据
	if here.existContent(id, belong) {
		here.updateConent(value)
	} else {
		doc := clover.NewDocument()
		doc.SetAll(value)
		here.db.InsertOne("content", doc)

	}
}

func (here *Db) existContent(id int, belong string) bool {
	result, _ := here.content.Where(clover.Field("id").Eq(id).And(clover.Field("belong").Eq(belong))).Exists()
	return result
}

func (here *Db) updateConent(value map[string]interface{}) error {
	return here.content.Where(
		clover.Field("id").Eq(value["id"].(int)).
			And(clover.Field("belong").Eq(value["belong"].(string))),
	).
		Update(value)
}

func (here *Db) DelContent(id string, belong string) error {
	return here.content.Where(clover.Field("id").Eq(id).And(clover.Field("belong").Eq(belong))).Delete()

}

func (here *Db) SearchContent(names []string) []*clover.Document {
	var name string
	for i, v := range names {
		if i < len(names)-1 {
			name += "(.*" + regexp.QuoteMeta(v) + ".*)|"
		} else {
			name += "(.*" + regexp.QuoteMeta(v) + ".*)"
		}
	}
	docs, _ := here.content.Where(clover.Field("name").Like(name)).FindAll()
	return docs
}

func (here *Db) GetContent(belong string, id int) *clover.Document {
	doc, _ := here.content.Where(clover.Field("belong").Eq(belong).And(clover.Field("id").Eq(id))).FindFirst()
	return doc
}
