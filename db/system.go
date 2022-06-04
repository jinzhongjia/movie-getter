package db

import (
	"os"

	"github.com/sirupsen/logrus"
	"golang.org/x/crypto/bcrypt"
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
			Account: "admin",
			Passwd:  string(hash),
		})
	}
}

// 登录
func (here *Db) Login(account string, password string) bool {
	system := &System{}
	here.db.Model(&System{}).Where("account = ?", account).Find(system)
	return bcrypt.CompareHashAndPassword([]byte(system.Passwd), []byte(password)) == nil
}

// 更新后台账户
func (here *Db) UpdateAccount(oldAccount string, newAccount string) error {
	db := here.db.Model(&System{
		Account: oldAccount,
	}).Update("account", newAccount)
	return db.Error
}

// 更新后台密码
func (here *Db) UpdatePassword(account string, newPassword string) error {
	hash, err := bcrypt.GenerateFromPassword([]byte(newPassword), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	db := here.db.Model(&System{
		Account: account,
	}).Update("account", string(hash))
	return db.Error
}
