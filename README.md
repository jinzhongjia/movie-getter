## 这是什么？

一个由Go编写的影视资源采集器，可以采集各大影视资源站

特色：

* 简单、轻量、部署即用
* 高效、采用gin框架
* 易用，api接口语义化

### demo

[GO MOVIE](http://movie.jinzh.me/)
后台地址：[here](http://movie.jinzh.me/#/user/login)
账户：admin
密码：admin888

### 资源站

推荐资源站：

1. [天空资源站](http://tiankongzy.cc/)
2. [卧龙资源站](https://wolongzyw.com/)

## 功能

### 目前功能：

* 全局采集资源
* 采集资源间隔定制化（默认为24h）
* 采集资源可控
* 搜索功能
* 分类功能
* 图片资源反向代理
* 采集源指定类别屏蔽
* 采集源添加
* 前端模板
* 后端管理模板

### 待实现：

* 前端前台后台页面分离
* redis缓存层
* 其他数据库类型支持
* 开放接口供其他程序采集
* 采集内容编辑
* 流量统计
* 日志系统
* 数据库管理(导出导入)

## 技术栈

gjson、gorm、gin、vue、naive-ui

后端api文档：[here](https://console-docs.apipost.cn/preview/ec88e3cf21948a37/480c3d77eff01465)


## 使用

当前的前端前台和后台尚未分离，后续会进行分离操作

前台页面首页的分类id如下：

* 1：电影
* 2：动漫
* 3：电视剧

**初始化配置**：可以通过命令行参数配置movie，或者通过conf.ini，亦或者通过环境变量控制（docker容器采取此方案）

后台地址为：www.example.com/#/user/login
初始管理员账户：admin
初始密码：admin888

使用方法：

* 使用二进制文件部署或者docker部署，推荐使用docker-compose文件进行部署，可进行自更新处理

* 登陆后台，更改管理员账户和密码

* 添加采集源、创建自建分类、分配采集类到自建分类

* 开始采集


## docker

dockerfile已经内置，可以直接自行打包image使用，也可以使用docker-compose

### 通过docker构建image

```bash
docker build -t yunyizhiying/movie .
```

#### 使用docker-compose部署（推荐，可进行自更新处理）

```bash
docker-compose up -d
```

## 贡献代码

本项目也是刚刚起步，欢迎所有热爱开源的朋友参与到该项目中
