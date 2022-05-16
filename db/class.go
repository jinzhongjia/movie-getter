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
		return true
	}
	return false
}

func (here *Db) existClass(id int, belong string) bool {
	result, _ := here.category.Where(clover.Field("id").Eq(id).And(clover.Field("belong").Eq(belong))).Exists()
	return result
}
