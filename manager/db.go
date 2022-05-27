package manager

import (
	"movie/db"
	"movie/getter"

	"github.com/sirupsen/logrus"
)

// 增加采集源
func (here *Manager) AddSource(name string, url string) bool {
	id, ok := here.Db.AddSource(name, url)
	if ok {
		return ok
	}
	here.Getters[id] = getter.NewGetter(id, name, url, false, 1)
	return ok
}

type Movie struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	Pic         string `json:"pic"`
	Actor       string `json:"actor"`
	Director    string `json:"director"`
	Duration    string `json:"duration"`
	Description string `json:"description"`
	Url         string `json:"url"`
	Belong      string `json:"belong"`
}

// func (here *Manager) Search(keyWords string, num int, pg int) []Movie {
// 	var movies []Movie
// 	names := strings.Fields(keyWords)
// 	docs := here.Db.SearchContent(names, num, pg)
// 	for _, doc := range docs {
// 		movies = append(movies, Movie{
// 			Id:          int(doc.Get("id").(int64)),
// 			Name:        doc.Get("name").(string),
// 			Pic:         doc.Get("pic").(string),
// 			Actor:       doc.Get("actor").(string),
// 			Director:    doc.Get("director").(string),
// 			Duration:    doc.Get("duration").(string),
// 			Description: doc.Get("description").(string),
// 			Url:         doc.Get("url").(string),
// 			Belong:      doc.Get("belong").(string),
// 		})
// 	}
// 	return movies
// }

// 删除采集源
func (here *Manager) DelSource(id uint) error {
	return here.Db.DelSource(id)
}

// 更新采集源名字
func (here *Manager) UpdateSourceName(oldName string, newName string) error {
	return here.Db.UpdateSourceName(oldName, newName)
}

// 增加自定义分类
func (here *Manager) AddCategory(name string) bool {
	_, ok := here.Db.AddCategory(name)
	return ok == nil
}

// 获取所有分类
func (here *Manager) GetCategory() []db.Category {

	categories, err := here.Db.AllCategory()
	if err != nil {
		logrus.Error(err)
	}
	return categories
}

// 删除分类
func (here *Manager) DelCategory(name string) error {
	return here.Db.DelCategory(name)
}

// 更新分类
func (here *Manager) UpdateCategory(oldName string, newName string) error {
	return here.Db.UpdateCategoryName(oldName, newName)
}

func (here *Manager) DistributeClass(classId uint, categoryId uint) error {
	return here.Db.DistributeClass(classId, categoryId)
}

// 分配采集类
// func (here *Manager) AllocateClass(id int, belong string, belong_cat string) error {
// 	return here.Db.DistributeClass(id, belong, belong_cat)
// }

// func (here *Manager) GetContent(belong string, id int) Movie {
// 	doc := here.Db.GetContent(belong, id)
// 	return Movie{
// 		Id:          int(doc.Get("id").(int64)),
// 		Name:        doc.Get("name").(string),
// 		Pic:         doc.Get("pic").(string),
// 		Actor:       doc.Get("actor").(string),
// 		Director:    doc.Get("director").(string),
// 		Duration:    doc.Get("duration").(string),
// 		Description: doc.Get("description").(string),
// 		Url:         doc.Get("url").(string),
// 		Belong:      doc.Get("belong").(string),
// 	}
// }

// func (here *Manager) GetContentByCategory(name string, num int, pg int) ([]Movie, int) {
// 	var movies []Movie

// 	docs, pgCount := here.Db.GetContentByCategory(name, num, pg)
// 	for _, doc := range docs {
// 		movies = append(movies, Movie{
// 			Id:          int(doc.Get("id").(int64)),
// 			Name:        doc.Get("name").(string),
// 			Pic:         doc.Get("pic").(string),
// 			Actor:       doc.Get("actor").(string),
// 			Director:    doc.Get("director").(string),
// 			Duration:    doc.Get("duration").(string),
// 			Description: doc.Get("description").(string),
// 			Url:         doc.Get("url").(string),
// 			Belong:      doc.Get("belong").(string),
// 		})
// 	}
// 	return movies, pgCount
// }

type Source struct {
	Name  string `json:"name"`
	Url   string `json:"url"`
	Alias string `json:"alias"`
	Pg    int    `json:"pg"`
}

func (here *Manager) GetSource() []db.Source {
	sources, _ := here.Db.AllSource()
	return sources
}
