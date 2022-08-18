package redis

import (
	"context"
	"github.com/sirupsen/logrus"
	"golang.org/x/crypto/bcrypt"
	"os"
)

const (
	systemPrefix         = "system-"
	userFiled            = "user"
	passwordFiled        = "password"
	collectIntervalFiled = "collectInterval"
)

func (here *Db) systemInit() {
	client := here.client

	// 进行初始化操作
	hash, err := bcrypt.GenerateFromPassword([]byte("admin888"), bcrypt.DefaultCost)
	if err != nil {
		logrus.Error("passwd encrypt failed!")
		os.Exit(1)
	}

	// 以下使用setnx,仅当值为空时才会填值

	// 尝试初始化用户名
	client.SetNX(context.Background(), systemPrefix+userFiled, "admin", 0)
	// 尝试初始化密码
	client.SetNX(context.Background(), systemPrefix+passwordFiled, hash, 0)
	// 尝试初始化采集间隔
	client.SetNX(context.Background(), systemPrefix+collectIntervalFiled, 12, 0)
}

// Login 登陆
func (here *Db) Login(account string, password string) bool {
	client := here.client

	user := client.Get(context.Background(), systemPrefix+userFiled).String()
	passwd := client.Get(context.Background(), systemPrefix+passwordFiled).String()

	return (user == account) && (bcrypt.CompareHashAndPassword([]byte(passwd), []byte(password)) == nil)
}

// 更新后台账户
func (here *Db) UpdateAccount(_ string, newAccount string) error {
	client := here.client
	return client.Set(context.Background(), systemPrefix+userFiled, newAccount, 0).Err()
}

// 更新后台密码
func (here *Db) UpdatePassword(_ string, newPassword string) error {
	client := here.client
	return client.Set(context.Background(), systemPrefix+passwordFiled, newPassword, 0).Err()
}

// 修改采集间隔
func (here *Db) ChangeCollectInterval(interval int) error {
	client := here.client
	return client.Set(context.Background(), systemPrefix+collectIntervalFiled, interval, 0).Err()
}

func (here *Db) GetCollectInterval() int {
	client := here.client
	result, err := client.Get(context.Background(), systemPrefix+collectIntervalFiled).Int()
	if err != nil {
		logrus.Error("get the collect interval from redis failed!")
		return 24
	}
	if result < 1 {
		return 24
	}
	return result
}
