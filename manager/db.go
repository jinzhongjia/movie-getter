package manager

import (
	"errors"
	"movie/db"
	"movie/getter"
	"strconv"
)

func (here *Manager) GetSource() ([]Source, error) {
	sources := []Source{}
	v, err := here.db.AllSource()
	for _, v := range v {
		sources = append(sources, Source{
			ID:   v.ID,
			Name: v.Name,
			Url:  v.Url,
			Get:  here.getters[v.ID].JudgeGetting(),
			Ok:   v.Ok,
			Pg:   v.Pg,
		})
	}
	return sources, err
}

// 增加采集源
func (here *Manager) AddSource(name string, url string) bool {
	id, ok := here.db.AddSource(name, url)
	if !ok {
		return ok
	}
	here.getters[id] = getter.NewGetter(id, name, url, false, 1)
	return ok
}

// 删除采集源
func (here *Manager) DelSource(id uint) error {
	return here.db.DelSource(id)
}

func handleContents(contents []db.Content) []Movie {
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
			Url:         content.Url,
		})
	}
	return movies
}

// 前台接口，搜索所有影片
func (here *Manager) SearchContent(keyword string, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.SearchContent(keyword, num, pg)
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

// 后台接口，全局搜索影片
func (here *Manager) SearchContent_bk(keyword string, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.SearchContent(keyword, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// 后台接口，搜索自建分类下影片
func (here *Manager) SearchContent_bk_Category(categoryId uint, keyword string, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.SearchContent_Category(categoryId, keyword, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// 后台接口，搜索采集类下影片
func (here *Manager) SearchContent_bk_Class(classId uint, keyword string, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.SearchContent_Class(classId, keyword, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// 后台接口，根据采集源搜索影片
func (here *Manager) SearchContent_bk_Source(sourceId uint, keyword string, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.SearchContent_Source(sourceId, keyword, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// 后台接口，所有影片列表
func (here *Manager) ContentList(num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.ContentList(num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// 后台接口，自建分类影片列表
func (here *Manager) ContentList_Category(categoryId uint, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.ContentList_Category(categoryId, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// 后台接口，采集类影片列表
func (here *Manager) ContentList_Class(classId uint, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.ContentList_Class(classId, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// 后台接口，采集源影片列表
func (here *Manager) ContentList_Source(sourceId uint, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.ContentList_Source(sourceId, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// 获取影片详细信息
func (here *Manager) GetContent(id uint) (Movie, error) {
	content, err := here.db.GetContent(id)
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

// 删除影片
func (here *Manager) DelContent(id uint) error {
	return here.db.DelContent(id)
}

// 更新采集源名字
func (here *Manager) UpdateSourceName(oldName string, newName string) error {
	return here.db.UpdateSourceName(oldName, newName)
}

// 更新采集源地址
func (here *Manager) UpdateSourceUrl(oldUrl string, newUrl string) error {
	return here.db.UpdateSourceUrl(oldUrl, newUrl)
}

// 增加自定义分类
func (here *Manager) AddCategory(name string) bool {
	_, ok := here.db.AddCategory(name)
	return ok == nil
}

// 获取所有分类
func (here *Manager) GetCategory() ([]Category, error) {
	var categories []Category
	tmp, err := here.db.AllCategory()
	if err != nil {
		return []Category{}, err
	}
	for _, v := range tmp {
		num, err := here.db.CategoryMovieCount(v.ID)
		if err != nil {
			return []Category{}, err
		}
		categories = append(categories, Category{
			ID:       v.ID,
			Name:     v.Name,
			ClassNum: here.db.CategoryClassCount(v.ID),
			MovieNum: num,
		})
	}
	return categories, nil
}

// 删除分类
func (here *Manager) DelCategory(id uint) error {
	return here.db.DelCategory(id)
}

// 更新分类
func (here *Manager) UpdateCategory(oldName string, newName string) error {
	return here.db.UpdateCategoryName(oldName, newName)
}

// 获取分类下影片
func (here *Manager) BrowseContentByCategory(categoryId uint, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.BrowseContentByCategory(categoryId, num, pg)

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
	v, err := here.db.GetClass(sourceId)
	classes := []Class{}
	for _, v := range v {
		classes = append(classes, Class{
			ID:         v.ID,
			Name:       v.Name,
			Get:        v.Get,
			CategoryId: v.CategoryID,
		})
	}
	return classes, err
}

// 分配采集类
func (here *Manager) DistributeClass(classId uint, categoryId uint) error {
	return here.db.DistributeClass(classId, categoryId)
}

// 更改采集类是否允许采集
func (here *Manager) ChangeClassGet(classId uint, get bool) error {
	return here.db.ChangeClassGet(classId, get)
}

// 登录函数
func (here *Manager) Login(account string, password string) bool {
	return here.db.Login(account, password)
}

// 获取所有影片数目
func (here *Manager) ContentCount() int {
	return here.db.ContentCount()
}

// 更新用户名
func (here *Manager) UpdateAccount(oldAccount string, newAccount string) error {
	return here.db.UpdateAccount(oldAccount, newAccount)
}

// 更新密码
func (here *Manager) UpdatePassword(account string, newPassword string) error {
	return here.db.UpdatePassword(account, newPassword)
}

// 更新采集间隔
func (here *Manager) UpdateCollectInterval(interval int) error {
	err := here.db.ChangeCollectInterval(interval)
	getter.ChangeInterval(interval)
	return err
}

// 获取采集间隔
func (here *Manager) GetCollectInterval() int {
	return getter.GetInterval()
}

func (here *Manager) ReGet(SourceId uint) error {
	getter, ok := here.getters[SourceId]
	if !ok {
		return errors.New("not exist the source which id is" + strconv.Itoa(int(SourceId)))
	}
	getter.ReGet()
	return nil
}

type Source struct {
	ID   uint   `json:"id"`
	Name string `json:"name"`
	Url  string `json:"url"`
	Get  bool   `json:"get"`
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
	ID         uint   `json:"id"`
	Name       string `json:"name"` // 采集分类名
	Get        bool   `json:"get"`  // 是否采集
	CategoryId uint   `json:"categoryId"`
}

type Category struct {
	ID       uint   `json:"id"`
	Name     string `json:"name"`
	ClassNum int    `json:"classNum"`
	MovieNum int    `json:"movieNum"`
}
