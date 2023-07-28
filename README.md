## 这是什么？

一款由 GO 编写的影视采集器，可以采集支持 MacCMS 的影视站

特色：

- 简单轻量,部署即开即用
- 高效,采用 gin 框架
- 易用,api 接口语义化
- 现代化,前后端分离

### demo

[GO MOVIE](http://movie.demo.nvimer.org/)

后台地址:[here](http://movie.demo.nvimer.org/admin)

账户:admin

密码:admin888

### 前端

前台源码：[Go](https://github.com/jinzhongjia/newMovie)
后台源码：[Go](https://github.com/jinzhongjia/newMovieAdmin)

## 功能

### 已实现

- 全局资源采集
- 采集间隔自定义
- 采集分类可控
- 搜索功能
- 分类功能
- 图片资源反向代理，客户端无感知
- 自定义采集源
- 前台后台管理页面分离
- 支持 mysql、sqlite
- 热点数据缓存(LRU 算法)
- 日志系统
- 全新的[后台管理系统](https://github.com/jinzhongjia/newMovieAdmin)，功能更完善（前后端适配）

### 待实现(完成)

- 流量统计
- 数据库管理(导出导入)
- 采集逻辑抽象化，方便支持更多类型的采集接口
- 对外api提供

## 技术栈

gjson、gorm、gin、vue、naive-ui

后端 api 文档：请查看`router/back.go`和`router/front.go`两个文件，其中定义了所有api

## 使用

### 手动构建

所需环境：

> Golang >= 1.18
> 
> nodejs
> 
> pnpm
> 
> make(构建工具)

步骤：

```sh
git clone https://github.com/jinzhongjia/movie-getter.git
cd movie-getter
make get
# 构建linux版本
make linux
# 构建windows版本
make windows
# 同时构建windows和linux，release版本
make release
```

### Docker-compose 部署（推荐）

下载本仓库的 master 分支的`docker-compose.yml`文件，运行以下命令

```bash
docker-compose -p movie up -d
```

---

后台地址:www.example.com/admin/

默认管理员账户:admin

默认密码:admin888

## 贡献代码

欢迎 fork 本仓库，该项目是我业余之时制作，欢迎贡献代码!
