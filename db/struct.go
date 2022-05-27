package db

type Source struct {
	ID      uint
	Name    string `gorm:"unique;not null;index"` // 资源库名字
	Url     string `gorm:"unique;not null;index"` // 资源库地址
	Ok      bool   `gorm:"default:false"`         // 资源库是否采集完
	Pg      int    `gorm:"default:1"`             // 资源库采集的页数
	Class   []Class
	Content []Content
} // 资源库表定义

type Content struct {
	ID          uint
	ContentId   int    `gorm:"index"` // 影片编号
	Name        string `gorm:"index"` //影片名
	Class       string // 所属类别
	Pic         string // 影片图片地址
	Actor       string // 主演
	Director    string // 导演
	Duration    string // 时长
	Description string // 简介
	Url         string `gorm:"unique"` // 视频链接
	Stamp       int64  // 创建时间戳
	SourceID    uint
	ClassID     uint
	//属于分类
} // 资源内容

type Class struct {
	ID         uint
	Name       string
	ClassId    int  `gorm:"not null;index"`
	Get        bool `gorm:"default:true"` // 是否采集
	Content    []Content
	SourceID   uint
	CategoryID uint
	// 属于资源库
	// 属于自建分类
} // 采集资源分类

type Category struct {
	ID    uint
	Name  string `gorm:"unique;not null;index"`
	Class []Class
} // 自建分类
