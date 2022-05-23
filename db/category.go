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

func (here *Db) GetContentByCategory(name string, num int, pg int) ([]*clover.Document, int) {
	var docs []*clover.Document
	var pgCount int
	var classes []*clover.Document
	if here.existCategory(name) {
		classes, _ = here.class.Where(clover.Field("belong-cat").Eq(name)).FindAll()
	} else {
		classes, _ = here.class.Where(clover.Field("name").Eq(name)).FindAll()
	}
	var ids []struct {
		id     int
		belong string
	}
	for _, v := range classes {
		id := int(v.Get("id").(int64))
		belong := v.Get("belong").(string)
		ids = append(ids, struct {
			id     int
			belong string
		}{
			id:     id,
			belong: belong,
		})
	}
	var condition *clover.Criteria = nil
	for _, v := range ids {
		if condition == nil {
			condition = clover.Field("class").In(v.id).And(clover.Field("belong").Eq(v.belong))
		} else {
			condition = condition.Or(clover.Field("class").In(v.id).And(clover.Field("belong").Eq(v.belong)))
		}
	}
	// fmt.Println(here.content.Where(clover.Field("class").Eq(3)).Count())
	if condition != nil {
		docs, _ = here.content.Where(condition).Skip(num * pg).Limit(num).Sort(clover.SortOption{
			Field:     "stamp",
			Direction: 1,
		}).FindAll()
		pgCount, _ = here.content.Where(condition).Count()
	}

	// fmt.Println(len(docs))
	return docs, pgCount
}
