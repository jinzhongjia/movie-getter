package db

import (
	"github.com/ostafen/clover"
	"github.com/sirupsen/logrus"
)

func (here *Db) AddCategory(name string) bool {
	if !here.existCategory(name) {
		doc := clover.NewDocument()
		doc.Set("name", name)
		here.db.InsertOne("category", doc)
		return true
	}
	return false
}

func (here *Db) existCategory(name string) bool {
	result, _ := here.category.Where(clover.Field("name").Eq(name)).Exists()
	return result
}

func (here *Db) UpdateCategory(oldName string, newName string) error {
	here.category.Where(clover.Field("name").Eq(oldName)).Update(map[string]interface{}{"name": newName})
	here.class.Where(clover.Field("belong-cat").Eq(oldName)).Update(map[string]interface{}{"belong-cat": newName})
	return nil
}

func (here *Db) DelCategory(name string) error {
	here.category.Where(clover.Field("name").Eq(name)).Delete()
	here.class.Where(clover.Field("belong-cat").Eq(name)).Update(map[string]interface{}{"belong-cat": ""})
	return nil
}

func (here *Db) GetCategory() []*clover.Document {
	result, err := here.category.FindAll()
	if err != nil {
		logrus.Error(err)
	}
	return result
}
