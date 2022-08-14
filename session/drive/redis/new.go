package redis

import (
	"context"
	"github.com/go-redis/redis/v8"
	"github.com/gorilla/sessions"
	"github.com/rbcervilla/redisstore/v8"
	"log"
	"movie/config"
)

func NewSession(client *redis.Client) *Session {
	store, err := redisstore.NewRedisStore(context.Background(), client)
	if err != nil {
		log.Fatal("failed to create redis store: ", err)
	}

	store.KeyPrefix(config.SessionSecret)
	store.Options(sessions.Options{
		MaxAge: 25200,
	})
	return &Session{
		ss: store,
	}
}
