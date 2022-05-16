package db

import "github.com/ostafen/clover"

func (here *Db) AddClass(name string, id int, belong string) bool {
	if !here.existClass(id, belong) {
		doc := clover.NewDocument()
		doc.Set("name", name)
		doc.Set("id", id)
		doc.Set("belong", belong)
		doc.Set("get", true)
		doc.Set("belong-cat", "")
		here.db.InsertOne("class", doc)
		return true
	}
	return false
}

// 判断该类别是否采集
func (here *Db) JudgeClass(id int, belong string) bool {
	doc, _ := here.class.Where(clover.Field("id").Eq(id).And(clover.Field("belong").Eq(belong))).FindFirst()
	return doc.Get("get").(bool)
}

// 分配采集类
func (here *Db) AllocateClass(id int, belong string, belong_cat string) error {
	return here.class.Where(clover.Field("id").Eq(id).And(clover.Field("belong").Eq(belong))).Update(map[string]interface{}{"belong-cat": belong_cat})
}

func (here *Db) existClass(id int, belong string) bool {
	result, _ := here.category.Where(clover.Field("id").Eq(id).And(clover.Field("belong").Eq(belong))).Exists()
	return result
}
