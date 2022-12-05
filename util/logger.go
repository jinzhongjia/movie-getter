package util

import (
	"fmt"
	"movie/config"
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
	fmt.Printf("config.LogPut: %v\n", config.LogPut)
	if config.LogPut == "" {
		Logger.SetOutput(os.Stdout)
	} else {
		file, err := os.OpenFile(config.LogPut, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
		if err == nil {
			// 设置将日志输出到文件
			Logger.SetOutput(file)
		} else {
			panic("can't open the log file!")
		}
	}

	Logger.SetLevel(logLevelParse())
}

func logLevelParse() log.Level {
	switch config.LogLevel {
	case "debug":
		return log.DebugLevel
	case "info":
		return log.InfoLevel
	case "warn":
		return log.WarnLevel
	default:
		return log.ErrorLevel
	}
}
