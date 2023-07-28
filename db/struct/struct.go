package _struct

type Source struct {
	ID      uint
	Name    string    `gorm:"unique;not null;index"` // 资源库名字
	Url     string    `gorm:"unique;not null;index"` // 资源库地址
	Ok      bool      `gorm:"default:false"`         // 资源库是否采集完
	Pg      int       `gorm:"default:1"`             // 资源库采集的页数
	Class   []Class   `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	Content []Content `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
} // 资源库表定义

type Content struct {
	ID          uint
	ContentId   int    // 影片编号
	Name        string `gorm:"index"` // 影片名
	Class       string // 所属类别 作为保留字段
	Pic         string // 影片图片地址
	Actor       string // 主演
	Director    string // 导演
	Duration    string // 时长
	Description string `gorm:"type:longText"` // 简介
	Url         string `gorm:"type:longText"` // 视频链接
	Stamp       int64  `gorm:"index"`         // 创建时间戳
	SourceID    uint   `gorm:"index;default:null"`
	ClassID     uint   `gorm:"index;default:null"`
	// 属于分类
} // 资源内容

type Class struct {
	ID         uint
	Name       string    // 采集分类名
	ClassId    int       `gorm:"not null;index"` // 采集分类id
	Get        bool      `gorm:"default:true"`   // 是否采集
	Content    []Content `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	SourceID   uint      `gorm:"default:null"`
	CategoryID uint      `gorm:"default:null"`
	// 属于资源库
	// 属于自建分类
} // 采集资源分类

type Category struct {
	ID    uint    `json:"id"`
	Name  string  `json:"name"       gorm:"unique;not null;index"` // 自建分类名
	Main  bool    `json:"main"       gorm:"default:true"`
	Class []Class `json:",omitempty" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
} // 自建分类

type System struct {
	Account         string // 账户
	Password        string // 密码
	CollectInterval int    `gorm:"default:24"` // 采集间隔时间
}
