package redis

import (
	"github.com/sirupsen/logrus"
	_struct "movie/db/struct"
	"strconv"
)

const (
	categoryId       = "category-id"         // 存储最新的分类id
	categoryPrefix   = "category-"           // 存储分类信息前缀
	categorySet      = "category-set-id"     // 存储自建分类id 集合
	categorySetClass = "category-set-class-" // 存储自建分类包含的class id 集合
)

const (
	categoryNameKey = "name"
)

func (here *Db) AddCategory(name string) (uint, error) {
	client := here.client
	newId := here.newCategoryId() // 获取最新的id
	strID := strconv.Itoa(int(newId))

	{
		// 创建hash
		_, err := client.HSet(ctx, categoryPrefix+strID, map[string]interface{}{
			categoryNameKey: name,
		}).Result()
		if err != nil {
			logrus.Error("redis add category failed", err)
			return 0, err
		}
	}

	{
		// 集合添加
		_, err := client.SAdd(ctx, categorySet, newId).Result()
		if err != nil {
			logrus.Error("redis add category set failed", err)
			return 0, err
		}
	}

	return newId, nil

}

// UpdateCategoryName 更新分类名字
func (here *Db) UpdateCategoryName(id uint, newName string) error {
	client := here.client
	strId := strconv.Itoa(int(id))
	_, err := client.HSet(ctx, categoryPrefix+strId, map[string]interface{}{
		categoryNameKey: newName,
	}).Result()
	if err != nil {
		logrus.Error("redis update category name failed", err)
	}
	return err
}

// DelCategory 删除自建分类
func (here *Db) DelCategory(id uint) error {
	client := here.client
	strId := strconv.Itoa(int(id))

	// todo 错误处理
	client.Del(ctx, categorySetClass+strId)
	client.SRem(ctx, categorySet, strId)
	client.Del(ctx, categoryPrefix+strId)
	return nil
}

// AllCategory 获取所有分类
func (here *Db) AllCategory() ([]_struct.Category, error) {
	client := here.client
	categories := make([]_struct.Category, 0)
	arr, err := client.SMembers(ctx, categorySet).Result()
	if err != nil {
		logrus.Error("redis get failed", err)
		return nil, err
	}

	for _, v := range arr {
		id, err := strconv.Atoi(v)
		if err != nil {
			continue
		}
		name, err := client.HGet(ctx, categoryPrefix+v, categoryNameKey).Result()
		categories = append(categories, _struct.Category{
			ID:   uint(id),
			Name: name,
		})
	}
	return categories, nil
}

// CategoryMovieCount 获取当前自建分类下所有的影片数目
func (here *Db) CategoryMovieCount(id uint) (int, error) {
	client := here.client
	strId := strconv.Itoa(int(id))
	arr, err := client.SMembers(ctx, categorySetClass+strId).Result()
	if err != nil {
		logrus.Error("redis get category set class failed", err)
		return 0, err
	}
	result := 0
	for _, s := range arr {
		classId, _ := strconv.Atoi(s)
		result += here.ClassMovieNum(uint(classId))
	}
	return result, nil
}

// CategoryClassCount 获取分类下的采集类数目
func (here *Db) CategoryClassCount(id uint) int {
	client := here.client
	strId := strconv.Itoa(int(id))

	num, err := client.SCard(ctx, categorySetClass+strId).Result()
	if err != nil {
		logrus.Error("redis get category's class failed", err)
		return 0
	}
	return int(num)
}

func (here *Db) newCategoryId() uint {
	v, err := here.client.Incr(ctx, categoryId).Result()
	if err != nil {
		logrus.Error("error ,the new source id generate failed", err)
	}
	return uint(v)
}

// 把class添加到category的集合中
func (here *Db) addClassToCategory(categoryId uint, classID uint) error {
	client := here.client
	_, err := client.SAdd(ctx, categorySetClass+strconv.Itoa(int(categoryId)), classID).Result()
	return err
}

func (here *Db) delClassToCategory(categoryId uint, classID uint) error {
	client := here.client
	_, err := client.SRem(ctx, categorySetClass+strconv.Itoa(int(categoryId)), classID).Result()
	return err
}
