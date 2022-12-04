package util

import (
	"os"

	log "github.com/sirupsen/logrus"
)

var Logger *log.Logger

func init() {
	Logger = log.New()
	// 设置日志格式为json格式
	Logger.SetFormatter(&log.TextFormatter{
    DisableColors: true,
  })

	// 设置将日志输出到标准输出（默认的输出为stderr,标准错误）
	// 日志消息输出可以是任意的io.writer类型
	Logger.SetOutput(os.Stdout)

	// 设置日志级别为warn以上
	Logger.SetLevel(log.InfoLevel)
}
