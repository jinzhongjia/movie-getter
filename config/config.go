package config

import (
	"flag"
	"fmt"
	"os"

	"gopkg.in/ini.v1"
)

var MysqlAddr string         // 数据库的地址
var RedisAddr string         // redis的地址
var RedisPassword string     // redis的密码
var Addr = "127.0.0.1:8000"  // 监听的地址
var SessionSecret = "secret" // session加密的秘钥

func init() {
	env()    // 读取环境变量
	config() // 尝试读取配置文件
	cli()    // 尝试读取命令行配置
}

// 读取环境变量
func env() {
	{
		// mysql配置
		host := os.Getenv("MYSQL_HOST")
		user := os.Getenv("MYSQL_USER")
		password := os.Getenv("MYSQL_PASSWORD")
		databaseName := os.Getenv("DATABASE_NAME")
		MysqlAddr = fmt.Sprintf("%v:%v@tcp(%v)/%v?charset=utf8mb4&parseTime=True&loc=Local", user, password, host, databaseName)

	}

	{
		//redis配置
		RedisAddr = os.Getenv("REDIS_HOST")
		RedisPassword = os.Getenv("REDIS_PASSWD")
	}
	listenAddr := os.Getenv("LISTEN_ADDR") // 监听地址

	if listenAddr != "" {
		Addr = listenAddr
	}

	sessionSecret := os.Getenv("SESSION_SECRET") // session秘钥

	if sessionSecret != "" {
		SessionSecret = sessionSecret
	}
}

// 尝试读取配置文件
func config() {
	cfg, err := ini.Load("conf.ini")
	if err != nil {
		return
	}
	{
		// mysql配置
		mysql := cfg.Section("mysql")
		host := mysql.Key("host").String()
		user := mysql.Key("user").String()
		password := mysql.Key("password").String()
		databaseName := mysql.Key("database_name").String()
		MysqlAddr = fmt.Sprintf("%v:%v@tcp(%v)/%v?charset=utf8mb4&parseTime=True&loc=Local", user, password, host, databaseName)
	}

	{
		//redis配置
		redis := cfg.Section("redis")
		RedisAddr = redis.Key("host").String()
		RedisPassword = redis.Key("password").String()
	}

	listenAddr := cfg.Section("").Key("listen_addr").String()

	if listenAddr != "" {
		Addr = listenAddr
	}

	sessionSecret := cfg.Section("").Key("session_secret").String()

	if sessionSecret != "" {
		SessionSecret = sessionSecret
	}
}

// 尝试读取命令行配置
func cli() {
	// mysql配置
	host := flag.String("MYSQL_HOST", "", "the host of mysql")
	user := flag.String("MYSQL_USER", "", "the user of mysql")
	password := flag.String("MYSQL_PASSWORD", "", "the password of mysql")
	databaseName := flag.String("DATABASE_NAME", "movie", "the database name of mysql")

	// redis配置
	RedisAddr = *(flag.String("REDIS_HOST", "", "the host of redis"))
	RedisPassword = *(flag.String("REDIS_PASSWORD", "", "the password of redis"))

	addr := flag.String("LISTEN_ADDR", "", "the program listen addr")
	sessionSecret := flag.String("SESSION_SECRET", "", "the secret of session")
	flag.Parse()
	if *host == "" || *user == "" || *password == "" {
		if *host != "" || *user != "" || *password != "" {
			fmt.Println("the params is not enough")
			os.Exit(1) // 出现错误的状态码
		}
		return
	}

	if *addr != "" {
		Addr = *addr
	}

	if *sessionSecret != "" {
		SessionSecret = *sessionSecret
	}

	MysqlAddr = fmt.Sprintf("%v:%v@tcp(%v)/%v?charset=utf8mb4&parseTime=True&loc=Local", user, password, host, databaseName)
}
