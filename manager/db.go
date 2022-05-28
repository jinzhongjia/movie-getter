package manager

import (
	"movie/db"
	"movie/getter"
)

func (here *Manager) GetSource() ([]Source, error) {
	sources := []Source{}
	v, err := here.Db.AllSource()
	for _, v := range v {
		sources = append(sources, Source{
			ID:   v.ID,
			Name: v.Name,
			Url:  v.Url,
			Ok:   v.Ok,
			Pg:   v.Pg,
		})
	}
	return sources, err
}

// 增加采集源
func (here *Manager) AddSource(name string, url string) bool {
	id, ok := here.Db.AddSource(name, url)
	if !ok {
		return ok
	}
	here.Getters[id] = getter.NewGetter(id, name, url, false, 1)
	return ok
}

// 删除采集源
func (here *Manager) DelSource(id uint) error {
	return here.Db.DelSource(id)
}

// 所有影片
func (here *Manager) SearchContent(keyword string, num int, pg int) ([]Movie, int, error) {
	movies := []Movie{}
	contents, pgCount, err := here.Db.SearchContent(keyword, num, pg)
	for _, content := range contents {
		movies = append(movies, Movie{
			Id:          int(content.ID),
			Name:        content.Name,
			Pic:         content.Pic,
			Actor:       content.Actor,
			Director:    content.Director,
			Duration:    content.Duration,
			Description: content.Description,
			// Url:         content.Url,
		})
	}
	return movies, pgCount, err
}

// 获取影片详细信息
func (here *Manager) GetContent(id uint) (Movie, error) {
	content, err := here.Db.GetContent(id)
	movie := Movie{
		Id:          int(content.ID),
		Name:        content.Name,
		Pic:         content.Pic,
		Actor:       content.Actor,
		Director:    content.Director,
		Duration:    content.Duration,
		Description: content.Description,
		Url:         content.Url,
	}
	return movie, err
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
func (here *Manager) GetCategory() ([]db.Category, error) {
	return here.Db.AllCategory()
}

// 删除分类
func (here *Manager) DelCategory(id uint) error {
	return here.Db.DelCategory(id)
}

// 更新分类
func (here *Manager) UpdateCategory(oldName string, newName string) error {
	return here.Db.UpdateCategoryName(oldName, newName)
}

// 获取分类下影片
func (here *Manager) BrowseContentByCategory(categoryId uint, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.Db.BrowseContentByCategory(categoryId, num, pg)

	movies := []Movie{}

	for _, content := range contents {
		movies = append(movies, Movie{
			Id:          int(content.ID),
			Name:        content.Name,
			Pic:         content.Pic,
			Actor:       content.Actor,
			Director:    content.Director,
			Duration:    content.Duration,
			Description: content.Description,
		})
	}

	return movies, pgCount, err
}

func (here *Manager) GetClass(sourceId uint) ([]Class, error) {
	v, err := here.Db.GetClass(sourceId)
	classes := []Class{}
	for _, v := range v {
		classes = append(classes, Class{
			ID:   v.ID,
			Name: v.Name,
			// ClassId: v.ClassId,
			Get: v.Get,
		})
	}
	return classes, err
}

// 分配采集类
func (here *Manager) DistributeClass(classId uint, categoryId uint) error {
	return here.Db.DistributeClass(classId, categoryId)
}

func (here *Manager) ChangeClassGet(classId uint, get bool) error {
	return here.Db.ChangeClassGet(classId, get)
}

type Source struct {
	ID   uint   `json:"id"`
	Name string `json:"name"`
	Url  string `json:"url"`
	Ok   bool   `json:"ok"`
	Pg   int    `json:"pg"`
}

type Movie struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	Pic         string `json:"pic"`
	Actor       string `json:"actor"`
	Director    string `json:"director"`
	Duration    string `json:"duration"`
	Description string `json:"description"`
	Url         string `json:"url,omitempty"`
}

type Class struct {
	ID   uint
	Name string // 采集分类名
	// ClassId int    // 采集分类id
	Get bool // 是否采集
}
