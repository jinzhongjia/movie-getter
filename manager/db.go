package manager

import (
	"errors"
	_struct "movie/db/struct"
	"movie/getter"
	"movie/util"
	"strconv"
)

func (here *Manager) GetSource() ([]Source, error) {
	sources := make([]Source, 0)
	v, err := here.db.AllSource()
	here.getters_mutex.Lock()
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
	here.getters_mutex.Unlock()
	return sources, err
}

// AddSource 增加采集源
func (here *Manager) AddSource(name string, url string) bool {
	id, ok := here.db.AddSource(name, url)
	if !ok {
		return ok
	}
	here.getters_mutex.Lock()
	here.getters[id] = getter.NewGetter(id, name, url, false, 1)
	here.getters_mutex.Unlock()
	return ok
}

// 重命名source名字
func (here *Manager) RenameSource(id uint, name string) error {
	err := here.db.UpdateSourceName(id, name)
	if err != nil {
		util.Logger.Warnf("rename source fialed, err: %s", err)
		return err
	}
	here.getters_mutex.Lock()
	getter, ok := here.getters[id]
	if !ok {
		return errors.New("the source which id is" + strconv.Itoa(int(id)) + " not exists")
	}
	getter.Rename(name)
	here.getters_mutex.Unlock()
	return nil
}

// 重命名source地址
func (here *Manager) ReurlSource(id uint, url string) error {
	err := here.db.UpdateSourceUrl(id, url)
	if err != nil {
		util.Logger.Warnf("rename source fialed, err: %s", err)
		return err
	}
	here.getters_mutex.Lock()
	getter, ok := here.getters[id]
	if !ok {
		return errors.New("the source which id is" + strconv.Itoa(int(id)) + " not exists")
	}
	getter.Reurl(url)
	here.getters_mutex.Unlock()
	return nil
}

// DelSource 删除采集源
func (here *Manager) DelSource(id uint) error {
	here.getters_mutex.Lock()
	getter, ok := here.getters[id]
	here.getters_mutex.Unlock()
	if !ok {
		return errors.New("the source which id is" + strconv.Itoa(int(id)) + " not exists")
	}
	getter.StopGet()
	// 直到采集停下前，会一直阻塞，应该采取一个定时任务（例如context定时）防止任务超时 TODO
	for getter.JudgeGetting() {
	}
	err := here.db.DelSource(id)
	here.getters_mutex.Lock()
	delete(here.getters, id)
	here.getters_mutex.Unlock()
	return err
}

// Copy main information
func handleContents(contents []_struct.Content) []Movie {
	movies := make([]Movie, 0)
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

// SearchContent 前台接口，搜索所有影片
func (here *Manager) SearchContent(keyword string, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.SearchContent(keyword, num, pg)
	movies := make([]Movie, 0)
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

// SearchContent_bk 后台接口，全局搜索影片
func (here *Manager) SearchContent_bk(keyword string, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.SearchContent(keyword, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// SearchContent_bk_Category 后台接口，搜索自建分类下影片
func (here *Manager) SearchContent_bk_Category(
	categoryId uint,
	keyword string,
	num int,
	pg int,
) ([]Movie, int, error) {
	contents, pgCount, err := here.db.SearchContent_Category(categoryId, keyword, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// SearchContent_bk_Class 后台接口，搜索采集类下影片
func (here *Manager) SearchContent_bk_Class(
	classId uint,
	keyword string,
	num int,
	pg int,
) ([]Movie, int, error) {
	contents, pgCount, err := here.db.SearchContent_Class(classId, keyword, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// SearchContent_bk_Source 后台接口，根据采集源搜索影片
func (here *Manager) SearchContent_bk_Source(
	sourceId uint,
	keyword string,
	num int,
	pg int,
) ([]Movie, int, error) {
	contents, pgCount, err := here.db.SearchContent_Source(sourceId, keyword, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// ContentList 后台接口，所有影片列表
func (here *Manager) ContentList(num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.ContentList(num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// ContentList_Category 后台接口，自建分类影片列表
func (here *Manager) ContentList_Category(categoryId uint, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.ContentList_Category(categoryId, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// ContentList_Class 后台接口，采集类影片列表
func (here *Manager) ContentList_Class(classId uint, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.ContentList_Class(classId, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// ContentList_Source 后台接口，采集源影片列表
func (here *Manager) ContentList_Source(sourceId uint, num int, pg int) ([]Movie, int, error) {
	contents, pgCount, err := here.db.ContentList_Source(sourceId, num, pg)
	movies := handleContents(contents)
	return movies, pgCount, err
}

// GetContent 获取影片详细信息
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

// DelContent 删除影片
func (here *Manager) DelContent(id uint) error {
	return here.db.DelContent(id)
}

// UpdateSourceName 更新采集源名字
func (here *Manager) UpdateSourceName(id uint, newName string) error {
	return here.db.UpdateSourceName(id, newName)
}

// UpdateSourceUrl 更新采集源地址
func (here *Manager) UpdateSourceUrl(id uint, newUrl string) error {
	return here.db.UpdateSourceUrl(id, newUrl)
}

// AddCategory 增加自定义分类
func (here *Manager) AddCategory(name string) error {
	_, ok := here.db.AddCategory(name)
	return ok
}

// SetCategoryMain 设置采集分类是否显示在首页
func (here *Manager) SetCategoryMain(id uint, main bool) error {
	err := here.db.SetCategoryMain(id, main)
	return err
}

// GetCategory 获取所有分类
func (here *Manager) GetCategory() ([]Category, error) {
	categories := make([]Category, 0)
	tmp, err := here.db.AllCategory()
	if err != nil {
		return categories, err
	}
	for _, v := range tmp {
		num, err := here.db.CategoryMovieCount(v.ID)
		if err != nil {
			return categories, err
		}
		categories = append(categories, Category{
			ID:       v.ID,
			Name:     v.Name,
			ClassNum: here.db.CategoryClassCount(v.ID),
			Main:     v.Main,
			MovieNum: num,
		})
	}
	return categories, nil
}

// GetMainCategory 获取主分类（也就是应该在主页显示的分类）
func (here *Manager) GetMainCategory() ([]Category, error) {
	res := make([]Category, 0)
	arr, err := here.db.AllCategory()
	if err != nil {
		return res, err
	}
	for _, v := range arr {
		if v.Main {
			res = append(res, Category{
				ID:   v.ID,
				Name: v.Name,
				// Main: v.Main,
				// should not return the info of main
			})
		}
	}
	return res, nil
}

// DelCategory 删除分类
func (here *Manager) DelCategory(id uint) error {
	return here.db.DelCategory(id)
}

// UpdateCategory 更新分类
func (here *Manager) UpdateCategory(id uint, newName string) error {
	return here.db.UpdateCategoryName(id, newName)
}

// BrowseContentByCategory 获取分类下影片
func (here *Manager) BrowseContentByCategory(
	categoryId uint,
	num int,
	pg int,
) ([]Movie, int, error) {
	contents, pgCount, err := here.db.BrowseContentByCategory(categoryId, num, pg)

	movies := make([]Movie, 0)

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
	classes := make([]Class, 0)
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

// DistributeClass 分配采集类
func (here *Manager) DistributeClass(classId uint, categoryId uint) error {
	return here.db.DistributeClass(classId, categoryId)
}

// ChangeClassGet 更改采集类是否允许采集
func (here *Manager) ChangeClassGet(classId uint, get bool) error {
	return here.db.ChangeClassGet(classId, get)
}

// Login 登录函数
func (here *Manager) Login(account string, password string) bool {
	return here.db.Login(account, password)
}

// ContentCount 获取所有影片数目
func (here *Manager) ContentCount() int {
	return here.db.ContentCount()
}

// UpdateAccount 更新用户名
func (here *Manager) UpdateAccount(oldAccount string, newAccount string) error {
	return here.db.UpdateAccount(oldAccount, newAccount)
}

// UpdatePassword 更新密码
func (here *Manager) UpdatePassword(account string, newPassword string) error {
	return here.db.UpdatePassword(account, newPassword)
}

// UpdateCollectInterval 更新采集间隔
func (here *Manager) UpdateCollectInterval(interval int) error {
	getters := make([]*getter.Getter, 0) // 创建一个切片存储当前正在采集的采集源
	// 尝试关闭所有正在进行的采集源
	here.getters_mutex.Lock()
	for _, getter := range here.getters {
		if getter.JudgeGetting() {
			getters = append(getters, getter) // 存储
			getter.StopGet()
			for getter.JudgeGetting() {
				// 自旋等待采集源结束
			}
		}
	}
	here.getters_mutex.Unlock()
	err := here.db.ChangeCollectInterval(interval)
	if err == nil {
		// 数据库更改成功后才会修改内存中的值
		getter.ChangeInterval(interval)
	}
	// 复原原本采集现场
	for _, getter := range getters {
		getter.StartGet()
	}
	return err
}

// GetCollectInterval 获取采集间隔
func (here *Manager) GetCollectInterval() int {
	return getter.GetInterval()
}

func (here *Manager) ReGet(SourceId uint) error {
	here.getters_mutex.Lock()
	getter, ok := here.getters[SourceId]
	here.getters_mutex.Unlock()
	if !ok {
		return errors.New("the source which id is not exist" + strconv.Itoa(int(SourceId)))
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
	Main     bool   `json:"main,omitempty"`
	ClassNum int    `json:"classNum,omitempty"`
	MovieNum int    `json:"movieNum,omitempty"`
}
