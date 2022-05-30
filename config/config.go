package config

import (
	"flag"
	"fmt"
	"os"

	"gopkg.in/ini.v1"
)

// var DbPath = "root:123456@tcp(127.0.0.1:3306)/movie?charset=utf8mb4&parseTime=True&loc=Local"
var DbAddr string

func init() {
	env()    // 读取环境变量
	config() // 尝试读取配置文件
	cli()    // 尝试读取命令行配置
}

// 读取环境变量
func env() {
	host := os.Getenv("MYSQL_HOST")
	user := os.Getenv("MYSQL_USER")
	password := os.Getenv("MYSQL_PASSWORD")
	databaseName := os.Getenv("DATABASE_NAME")
	DbAddr = fmt.Sprintf("%v:%v@tcp(%v)/%v?charset=utf8mb4&parseTime=True&loc=Local", user, password, host, databaseName)
}

// 尝试读取配置文件
func config() {
	cfg, err := ini.Load("conf.ini")
	if err != nil {
		return
	}
	mysql := cfg.Section("mysql")
	host := mysql.Key("host").String()
	user := mysql.Key("user").String()
	password := mysql.Key("password").String()
	databaseName := mysql.Key("database_name").String()
	DbAddr = fmt.Sprintf("%v:%v@tcp(%v)/%v?charset=utf8mb4&parseTime=True&loc=Local", user, password, host, databaseName)
}

// 尝试读取命令行配置
func cli() {
	host := flag.String("MYSQL_HOST", "", "the host of mysql")
	user := flag.String("MYSQL_USER", "", "the user of mysql")
	password := flag.String("MYSQL_PASSWORD", "", "the password of mysql")
	databaseName := flag.String("DATABASE_NAME", "movie", "the database name of mysql")
	flag.Parse()
	if *host == "" || *user == "" || *password == "" {
		if *host != "" || *user != "" || *password != "" {
			fmt.Println("the params is not enough")
			os.Exit(1) // 出现错误的状态码
		}
		return
	}
	DbAddr = fmt.Sprintf("%v:%v@tcp(%v)/%v?charset=utf8mb4&parseTime=True&loc=Local", user, password, host, databaseName)
}
