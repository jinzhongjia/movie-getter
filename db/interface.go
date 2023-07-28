package db

import _struct "movie/db/struct"

type Db interface {
	// Category 分类接口

	AddCategory(name string) (uint, error)            // 添加分类
	UpdateCategoryName(id uint, newName string) error // 更改分类名字
	DelCategory(id uint) error                        // 删除分类
	AllCategory() ([]_struct.Category, error)         // 获取所有分类
	CategoryMovieCount(categoryId uint) (int, error)  // 获取分类下影片数目
	CategoryClassCount(categoryId uint) int           // 获取分类下采集类数目
	SetCategoryMain(id uint, main bool) error         // 设置采集分类为main

	// Class 采集类接口

	AddClass(sourceId uint, name string, class_Id int) error // 添加采集类
	DistributeClass(classId uint, categoryId uint) error     // 分配采集类
	JudgeClass(SourceId uint, class_Id uint) bool            // 判断采集类是否允许采集
	// GetClass getClassIdBySourceId(sourceId uint, class_Id int) uint   // 通过采集源id获取采集类id
	GetClass(sourceId uint) ([]_struct.Class, error) // 通过采集源id获取其下所有采集类
	ChangeClassGet(classId uint, get bool) error     // 改变采集状态
	ClassMovieNum(classId uint) int                  // 获得某个采集类下所有影片

	// Content 影片接口

	AddContent(
		content_Id int, name string, pic string, actor string, director string,
		duration string, description string, url string, class_Id int, sourceId uint,
	) error // 添加影片
	DelContent(
		id uint,
	) error // 删除影片
	Rename(id uint, name string) error         // 重命名影片名
	Repic(id uint, pic string) error           // 重命名影片海报地址
	Reactor(id uint, actor string) error       // 重命名影片演员
	Redirector(id uint, director string) error //重命名影片导演
	Reduration(id uint, duration string) error // 重命名影片时长
	Redesc(id uint, desc string) error         //重命名影片的简介
	Reurl(id uint, url string) error           // 重命名影片的播放地址

	SearchContent(
		keyword string,
		num int,
		pg int,
	) ([]_struct.Content, int, error) // 全局搜索影片
	SearchContent_Category(
		categoryId uint,
		keyword string,
		num int,
		pg int,
	) ([]_struct.Content, int, error) // 搜索自建分类下影片
	SearchContent_Class(
		classId uint,
		keyword string,
		num int,
		pg int,
	) ([]_struct.Content, int, error) // 搜索采集分类下影片
	SearchContent_Source(
		sourceId uint,
		keyword string,
		num int,
		pg int,
	) ([]_struct.Content, int, error) // 搜索某个采集源下的影片
	ContentList(
		num int,
		pg int,
	) ([]_struct.Content, int, error) // 全局影片列表
	ContentList_Category(
		categoryId uint,
		num int,
		pg int,
	) ([]_struct.Content, int, error) // 自建分类影片列表
	ContentList_Class(
		classId uint,
		num int,
		pg int,
	) ([]_struct.Content, int, error) // 采集类影片列表
	ContentList_Source(
		sourceId uint,
		num int,
		pg int,
	) ([]_struct.Content, int, error) // 采集源影片列表
	GetContent(
		id uint,
	) (_struct.Content, error) // 获取影片
	BrowseContentByCategory(
		categoryId uint,
		num int,
		pg int,
	) ([]_struct.Content, int, error) // 分类下的影片
	ContentCount() int // 获取全部影片的数目

	// Source 采集源接口

	AddSource(name string, url string) (uint, bool) // 添加采集源
	UpdateSourceName(id uint, newName string) error // 更新资源库名字
	UpdateSourceUrl(id uint, newUrl string) error   // 更新资源库地址
	DelSource(id uint) error                        // 删除资源库
	UpdateSourceOk(id uint, status bool) error      // 资源库采集状态（是否完成）
	AllSource() ([]_struct.Source, error)           // 获取所有采集源
	UpdateSourcePg(id uint, pg int) error           // 更新采集页数
	SourceMovieNum(sourceId uint) int               // 获取采集源下影片数目

	// System 系统接口

	Login(account string, password string) bool               // 登录验证
	UpdateAccount(oldAccount string, newAccount string) error // 更新后台账户
	UpdatePassword(account string, newPassword string) error  // 更新后台密码
	ChangeCollectInterval(interval int) error                 // 更改采集间隔
	GetCollectInterval() int                                  // 获取采集间隔

	// db 特性，使用时需要检验返回的是否为nil空指针

	DbGet() interface{} // 获取数据库句柄
	DbType() int        // 获取数据库类型
}
