package redis

import (
	"crypto/tls"
	"fmt"
	"github.com/sirupsen/logrus"
	"github.com/tidwall/gjson"
	"io/ioutil"
	_struct "movie/db/struct"
	"net/http"
	"strconv"
)

const (
	sourceId                     = "source-id"       // 存储最新id的字段
	sourcePrefix                 = "source-"         // 采集源信息前缀
	sourceNameToId               = "source-nti"      // 源名字到id的映射
	sourceUrlToId                = "source-uti"      // 源url到id的映射
	sourceSet                    = "source-set-id"   // 存储采集源id的集合
	aSourceContentPrefix         = "source-content-" // 单个源的影片id的有序集合前缀
	aSourceClassPrefix           = "source-class-"   // 单个源的采集类的有序集合前缀
	aSourceContentNameToIdPrefix = "a-source-cnti-"  // 单个源的影片名字到id的hash前缀
	sourceContentNameToIdPrefix  = "source-cnti-"    // 所有源下的影片名字到id的hash前缀
)

const (
	sourceNameKey = "name"
	sourceUrlKey  = "url"
	sourceOkKey   = "ok"
	sourcePgKey   = "pg"
)

// AddSource 添加source
func (here *Db) AddSource(name string, url string) (uint, bool) {

	// todo 需要实现资源库和url唯一的检测

	client := here.client
	newId := here.newSourceId()
	{
		_, err := client.HSet(
			ctx,
			sourcePrefix+strconv.Itoa(int(newId)),
			map[string]interface{}{
				sourceNameKey: name,
				sourceUrlKey:  url,
				sourceOkKey:   false,
				sourcePgKey:   1,
			}).Result()
		if err != nil {
			logrus.Error("add source failed", err)
			return 0, false
		}

	}

	{
		// 添加集合
		_, err := client.SAdd(ctx, sourceSet, newId).Result()
		if err != nil {
			logrus.Error("add source to set failed", err)
			return 0, false
		}
		// 添加name到id的映射
		_, err = client.HSet(
			ctx, sourceNameToId, map[string]interface{}{
				name: newId,
			}).Result()
		if err != nil {
			logrus.Error("add source to nti failed", err)
			return 0, false
		}
		// 添加url到id的映射
		_, err = client.HSet(
			ctx, sourceUrlToId, map[string]interface{}{
				url: newId,
			}).Result()
		if err != nil {
			logrus.Error("add source to uti failed", err)
			return 0, false
		}
	}
	err := here.sourceInit(url, newId)
	if err != nil {
		logrus.Error("source init failed", err)
		return 0, false
	}
	return newId, true
}

// UpdateSourceName 更新资源库名字
func (here *Db) UpdateSourceName(id uint, newName string) error {
	client := here.client
	_, err := client.HSet(ctx, sourcePrefix+strconv.Itoa(int(id)), map[string]interface{}{
		sourceNameKey: newName,
	}).Result()
	if err != nil {
		logrus.Error("redis update source name failed", err)
		return err
	}
	return nil
}

// UpdateSourceUrl  更新资源库名字
func (here *Db) UpdateSourceUrl(id uint, newUrl string) error {
	client := here.client
	_, err := client.HSet(ctx, sourcePrefix+strconv.Itoa(int(id)), map[string]interface{}{
		sourceUrlKey: newUrl,
	}).Result()
	if err != nil {
		logrus.Error("redis update source url failed", err)
		return err
	}
	return nil
}

// DelSource 删除资源库
func (here *Db) DelSource(id uint) error {
	var err error = nil
	client := here.client
	strID := strconv.Itoa(int(id))
	_, err = client.SRem(ctx, sourceSet, strID).Result()
	if err != nil {
		logrus.Error("del source set failed!", err)
	}
	value, err := client.HGetAll(ctx, sourcePrefix+strID).Result()
	if err != nil {
		logrus.Error("get source detail failed!", err)
	}
	client.HDel(ctx, sourceNameToId, value[sourceNameKey])
	client.HDel(ctx, sourceUrlToId, value[sourceUrlKey])
	client.HDel(ctx, sourcePrefix+strID) // 删除哈希
	client.Del(ctx, aSourceClassPrefix+strID)
	return err
}

// UpdateSourceOk 更新source的ok状态
func (here *Db) UpdateSourceOk(id uint, status bool) error {
	client := here.client
	_, err := client.HSet(ctx, sourcePrefix+strconv.Itoa(int(id)), map[string]interface{}{
		sourceOkKey: status,
	}).Result()
	if err != nil {
		logrus.Error("redis update source ok failed", err)
		return err
	}
	return nil
}

// AllSource 获取所有的source
func (here *Db) AllSource() ([]_struct.Source, error) {
	client := here.client
	sources := make([]_struct.Source, 0)
	values, err := client.SMembers(ctx, sourceSet).Result()
	if err != nil {
		logrus.Error("redis get all source failed", err)
		return nil, err
	}
	for _, val := range values {
		id, err := strconv.Atoi(val)
		if err != nil {
			logrus.Error("redis get source id err,id:", id, err)
			return nil, err
		}
		source, err := client.HGetAll(ctx, sourcePrefix+val).Result()
		if err != nil {
			logrus.Error("redis get source failed,id:", id, err)
			return nil, err
		}
		pg, _ := strconv.Atoi(source[sourcePgKey])
		sources = append(sources, _struct.Source{
			ID:   uint(id),
			Name: source[sourceNameKey],
			Url:  source[sourceUrlKey],
			Ok:   source[sourceOkKey] == "1",
			Pg:   pg,
		})
	}
	return sources, nil
}

// UpdateSourcePg 更新source采集的页数
func (here *Db) UpdateSourcePg(id uint, pg int) error {
	client := here.client
	_, err := client.HSet(ctx, sourcePrefix+strconv.Itoa(int(id)), map[string]interface{}{
		sourcePgKey: pg,
	}).Result()
	if err != nil {
		logrus.Error("redis update source pg failed", err)
		return err
	}
	return nil
}

// 初始化数据库
func (here *Db) sourceInit(url string, sourceId uint) error {
	c := &http.Client{
		Transport: &http.Transport{
			TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
		},
	}

	res, err := c.Get(url)
	if err != nil {
		fmt.Println(err)
		return err
	}
	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)
	classes := gjson.Get(string(body), "class").Array()
	for _, vv := range classes {
		v := vv.Value().(map[string]interface{})
		name := v["type_name"].(string)
		class_Id := int(v["type_id"].(float64))
		err := here.AddClass(sourceId, name, class_Id)
		// todo 这里需要处理添加采集类
		if err != nil {
			logrus.Error("add class failed", err)
		}
	}
	return nil
}

func (here *Db) sourceAddClass(sourceID uint, classId uint) error {
	client := here.client
	_, err := client.SAdd(ctx, aSourceClassPrefix+strconv.Itoa(int(sourceID)), classId).Result()
	if err != nil {
		logrus.Error("redis sourceAddClass failed", err)
		return err
	}
	return nil
}

func (here *Db) sourceDelClass(sourceID uint, classId uint) error {
	client := here.client
	_, err := client.SRem(ctx, aSourceClassPrefix+strconv.Itoa(int(sourceID)), classId).Result()
	if err != nil {
		logrus.Error("redis sourceAddClass failed", err)
		return err
	}
	return nil
}

func (here *Db) getSourceAllClass(sourceID uint) []string {
	client := here.client
	values, err := client.SMembers(ctx, aSourceClassPrefix+strconv.Itoa(int(sourceID))).Result()
	if err != nil {
		logrus.Error("redis get source all class", err)
	}
	return values
}

// 通知redis生成新的sourceId
func (here *Db) newSourceId() uint {
	v, err := here.client.Incr(ctx, sourceId).Result()
	if err != nil {
		logrus.Error("error ,the new source id generate failed", err)
	}
	return uint(v)
}
