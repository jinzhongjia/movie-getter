package redis

import (
	"github.com/sirupsen/logrus"
	_struct "movie/db/struct"
	"strconv"
)

const (
	classId             = "class-id"       // 存储采集类最新id的字段
	classPrefix         = "class-"         // 采集类信息前缀
	classSet            = "class-set-id"   // 采集类id集合
	aClassContentPrefix = "class-content-" // 单个采集类包含的影片id集合前缀(有序集合)
)

const (
	classNameKey     = "name"
	classClassIDKey  = "classId"
	classGetKey      = "classGet"
	classSourceKey   = "source"
	classCategoryKey = "category"
)

func (here *Db) AddClass(sourceId uint, name string, class_Id int) error {
	client := here.client
	newId := here.newClassId()
	strID := strconv.Itoa(int(newId))

	{
		//创建hash
		_, err := client.HSet(ctx, classPrefix+strID, map[string]interface{}{
			classNameKey:     name,
			classClassIDKey:  class_Id,
			classGetKey:      true,
			classSourceKey:   sourceId,
			classCategoryKey: 0,
		}).Result()
		if err != nil {
			logrus.Error("redis add class failed", err)
			return err
		}
	}
	{
		_, err := client.SAdd(ctx, classSet, newId).Result()
		if err != nil {
			logrus.Error("redis add class set failed", err)
			return err
		}
	}
	{
		err := here.sourceAddClass(sourceId, newId)
		if err != nil {
			logrus.Error("redis add class sourceAddClass failed", err)
			return err
		}
	}

	return nil
}

// DistributeClass 分配class
func (here *Db) DistributeClass(classId uint, categoryId uint) error {
	client := here.client
	strId := strconv.Itoa(int(classId))
	oldCategoryIdStr, err := client.HGet(ctx, classPrefix+strId, classCategoryKey).Result()
	if err != nil {
		logrus.Error("redis get category id failed", err)
		return err
	}
	oldCategoryId, err := strconv.Atoi(oldCategoryIdStr)
	if err != nil {
		logrus.Error("redis get category id failed,atoi failed", err)
		return err
	}
	if oldCategoryId > 0 {
		err := here.delClassToCategory(uint(oldCategoryId), classId)
		if err != nil {
			logrus.Error("redis delClassToCategory failed", err)
			return err
		}
	}

	err = here.addClassToCategory(categoryId, classId)
	if err != nil {
		logrus.Error("redis addClassToCategory failed", err)
		return err
	}

	return nil
}

// JudgeClass 判断判断当前分类是否允许采集 //todo 测试布尔值会被redis怎么存储
func (here *Db) JudgeClass(SourceId uint, class_Id uint) bool {
	client := here.client
	values := here.getSourceAllClass(SourceId)
	for _, value := range values {
		//classId, _ := strconv.Atoi(value)
		classValue, err := client.HGetAll(ctx, classPrefix+value).Result()
		if err != nil {
			logrus.Error("redis get class detail failed", err)
		}
		if classValue[classClassIDKey] == strconv.Itoa(int(class_Id)) {
			if classValue[classGetKey] == "0" {
				return false
			} else {
				return true
			}
		}
	}
	return false
}

// GetClass 获取某资源库下所有采集类
func (here *Db) GetClass(sourceId uint) ([]_struct.Class, error) {
	client := here.client
	classes := make([]_struct.Class, 0)
	arr, err := client.SMembers(ctx, aSourceClassPrefix+strconv.Itoa(int(sourceId))).Result()

	if err != nil {
		logrus.Error("redis get all sourceClass failed", err)
		return nil, err
	}
	for _, v := range arr {
		classDetail, err := client.HGetAll(ctx, classPrefix+v).Result()
		if err != nil {
			logrus.Error("redis get all source detail failed", err)
			return nil, err
		}
		id, err := strconv.Atoi(v)
		if err != nil {
			logrus.Error("redis switch id failed", err)
			return nil, err
		}
		class_Id, err := strconv.Atoi(classDetail[classClassIDKey])
		if err != nil {
			logrus.Error("redis switch class_id failed", err)
			return nil, err
		}
		classes = append(classes, _struct.Class{
			ID:      uint(id),
			Name:    classDetail[classNameKey],
			ClassId: class_Id,
			Get:     classDetail[classGetKey] == "1",
		})
	}
	return classes, nil

}

// ChangeClassGet 改变采集状态
func (here *Db) ChangeClassGet(classId uint, get bool) error {
	client := here.client
	strId := strconv.Itoa(int(classId))

	_, err := client.HSet(ctx, classPrefix+strId, map[string]interface{}{
		classGetKey: get,
	}).Result()
	return err
}

// ClassMovieNum todo 获取某个采集分类下的所有影片数目
func (here *Db) ClassMovieNum(classId uint) int {

	return 0
}

func (here *Db) newClassId() uint {
	v, err := here.client.Incr(ctx, classId).Result()
	if err != nil {
		logrus.Error("error ,the new source id generate failed", err)
	}
	return uint(v)
}
