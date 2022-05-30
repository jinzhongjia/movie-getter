## 这是什么？

一个由Go编写的影视资源采集器，可以采集各大影视资源站

特色：

* 简单、轻量、部署即用
* 高效、采用gin框架
* 易用，api接口语义化

### demo

[GO MOVIE](https://movie.jinzh.me/)

### 资源站

推荐资源站：

1. [天空资源站](http://tiankongzy.cc/)
2. [卧龙资源站](https://wolongzyw.com/)

## 功能

### 目前功能：

* 全局采集资源
* 定时采集最新资源（24h）
* 采集资源可控
* 搜索功能
* 分类功能
* 图片资源反向代理
* 采集源指定类别屏蔽
* 采集源添加
* 前端模板

### 待实现：

* redis缓存层
* 其他数据库类型支持
* 开放接口供其他程序采集
* 采集内容编辑
* 流量统计
* 日志系统
* 数据库管理(导出导入)

## 技术栈

gjson、gorm、gin


## docker

dockerfile已经内置，可以直接自行打包image使用，也可以使用docker-compose

### 通过docker构建image

```bash
docker build -t yunyizhiying/movie .
```

#### 使用docker-compose

```bash
docker-compose up -d
```

## 贡献代码

本项目也是刚刚起步，欢迎所有热爱开源的朋友参与到该项目中