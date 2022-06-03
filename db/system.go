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
		hash, err := bcrypt.GenerateFromPassword([]byte(""), bcrypt.DefaultCost)
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
