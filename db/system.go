package db

import (
	"log"
	"os"

	"github.com/sirupsen/logrus"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

func (here *Db) systemInit() {
	var num int64
	here.db.Model(&System{}).Count(&num)
	if num == 0 {
		hash, err := bcrypt.GenerateFromPassword([]byte("admin888"), bcrypt.DefaultCost)
		if err != nil {
			logrus.Error("passwd encrypt failed!")
			os.Exit(1)
		}
		here.db.Create(&System{
			Account:  "admin",
			Password: string(hash),
		})
	}
}

// Login 登录
func (here *Db) Login(account string, password string) bool {
	system := &System{}
	here.db.Model(&System{}).Where("account = ?", account).Find(system)
	return bcrypt.CompareHashAndPassword([]byte(system.Password), []byte(password)) == nil
}

// UpdateAccount 更新后台账户
func (here *Db) UpdateAccount(oldAccount string, newAccount string) error {
	db := here.db.Model(&System{}).Where("account = ?", oldAccount).Update("account", newAccount)
	return db.Error
}

// UpdatePassword 更新后台密码
func (here *Db) UpdatePassword(account string, newPassword string) error {
	hash, err := bcrypt.GenerateFromPassword([]byte(newPassword), bcrypt.DefaultCost)
	if err != nil {
		logrus.Error("passwd encrypt failed!")
		return err
	}
	db := here.db.Model(&System{}).Where("account = ?", account).Update("password", string(hash))
	return db.Error
}

// ChangeCollectInterval 修改采集间隔
func (here *Db) ChangeCollectInterval(interval int) error {
	db := here.db.Session(&gorm.Session{AllowGlobalUpdate: true}).Model(&System{}).Update("collect_interval", interval)
	return db.Error
}

// GetCollectInterval 获取采集间隔
func (here *Db) GetCollectInterval() int {
	var system System
	db := here.db.Select("collect_interval").Find(&system)
	if db.Error != nil {
		log.Println("get collect interval failed, err:", db.Error)
	}
	if system.CollectInterval == 0 {
		return 24
	}
	return system.CollectInterval
}
