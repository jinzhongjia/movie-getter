package redis

import (
	"github.com/go-redis/redis/v8"
	"movie/config"
	_type "movie/db/type"
)

type Db struct {
	client *redis.Client
}

func NewDb() *Db {
	rdb := redis.NewClient(&redis.Options{
		Addr:     config.RedisAddr,
		Password: config.RedisPassword,
		DB:       0, // use default DB
	})
	return &Db{
		client: rdb,
	}
}

// DbGet 获取gorm句柄
func (here *Db) DbGet() interface{} {
	return here.client
}

// DbType 获取数据库类型
func (here *Db) DbType() int {
	return _type.Redis
}
