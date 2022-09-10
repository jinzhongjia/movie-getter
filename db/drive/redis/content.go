package redis

import (
	"github.com/go-redis/redis/v8"
	"github.com/sirupsen/logrus"
	_struct "movie/db/struct"
	"strconv"
)

const (
	contentId           = "content-id"     // 存储最新id的字段
	contentPrefix       = "content-"       // 采集影片信息前缀
	contentSet          = "content-set-id" // 采集影片id的集合
	contentNameToId     = "content-nti"    // 采集影片名字到id的映射
	contentIDSourceToId = "content-IDSti"  // content采集id+sourceId到存储id的映射
)

const (
	contentIdKey          = "id"
	contentNameKey        = "name"
	contentPicKey         = "pic"
	contentActorKey       = "actor"
	contentDirectorKey    = "director"
	contentDurationKey    = "duration"
	contentDescriptionKey = "description"
	contentUrlKey         = "url"
	contentClassIdKey     = "class_id"
	contentSourceIdKey    = "sourceId"
)

func (here *Db) AddContent(content_Id int,
	name string, // 影片名
	pic string, //
	actor string,
	director string,
	duration string,
	description string,
	url string,
	class_Id int, //所属类别
	sourceId uint, // source id
) error {
	id, ok := here.existContent(content_Id, sourceId)
	if ok {
		return here.updateContent(id, content_Id, name, pic, actor, director, duration, description, url) //class_Id,
		//sourceId,

	}
	return here.addContent(
		content_Id, name, pic, actor, director, duration, description, url, class_Id, sourceId)
}

func (here *Db) existContent(content_Id int, sourceId uint) (uint, bool) {
	client := here.client
	v, err := client.HGet(ctx, contentIDSourceToId, strconv.Itoa(int(sourceId))+strconv.Itoa(content_Id)).Result()
	if err != nil {
		logrus.Error("redis get contentIDSourceToId failed", err)
	}
	if v == "" {
		return 0, false
	}

	vv, _ := strconv.Atoi(v)
	return uint(vv), true
}

func (here *Db) updateContent(
	id uint,
	content_Id int,
	name string, // 影片名
	pic string, //
	actor string,
	director string,
	duration string,
	description string,
	url string,
	// class_Id int, //所属类别
	// sourceId uint, // source id
) error {
	client := here.client
	_, err := client.HSet(ctx, contentPrefix+strconv.Itoa(int(id)), map[string]interface{}{
		//contentIdKey:          content_Id,
		contentNameKey:        name,
		contentPicKey:         pic,
		contentActorKey:       actor,
		contentDirectorKey:    director,
		contentDurationKey:    duration,
		contentDescriptionKey: description,
		contentUrlKey:         url,
	}).Result()
	return err
}

func (here *Db) addContent(
	content_Id int,
	name string, // 影片名
	pic string, //
	actor string,
	director string,
	duration string,
	description string,
	url string,
	class_Id int, //所属类别
	sourceId uint, // source id
) error {
	client := here.client
	id := here.newContentId()
	_, err := client.HSet(ctx, contentPrefix+strconv.Itoa(int(id)), map[string]interface{}{
		contentIdKey:          content_Id,
		contentNameKey:        name,
		contentPicKey:         pic,
		contentActorKey:       actor,
		contentDirectorKey:    director,
		contentDurationKey:    duration,
		contentDescriptionKey: description,
		contentUrlKey:         url,
		contentClassIdKey:     class_Id,
		contentSourceIdKey:    sourceId,
	}).Result()
	if err != nil {
		return err
	}

	_, err = client.ZAdd(ctx, contentSet, &redis.Z{
		Score:  0,
		Member: 1,
	}).Result()

	_, err = client.HSet(ctx, contentIDSourceToId, map[string]interface{}{
		strconv.Itoa(int(sourceId)) + strconv.Itoa(int(content_Id)): id,
	}).Result()
	_, err = client.HSet(ctx, contentNameToId, map[string]interface{}{
		name: id,
	}).Result()
	return err
}

// DelContent 删除content
func (here *Db) DelContent(id uint) error {
	client := here.client
	strId := strconv.Itoa(int(id))
	_, err := client.ZRem(ctx, contentSet, strId).Result()
	if err != nil {
		logrus.Error("redis delete contentSet failed", err)
	}
	v, err := client.HGetAll(ctx, contentPrefix+strId).Result()
	if err != nil {
		logrus.Error("redis get  content detail failed", err)
	}
	_, err = client.HDel(ctx, contentNameToId, v[contentNameKey]).Result()
	if err != nil {
		logrus.Error("redis delete contentNameToId failed")
	}
	_, err = client.HDel(ctx, contentIDSourceToId, v[sourceId]+v[contentIdKey]).Result()
	if err != nil {
		logrus.Error("redis delete contentNameToId failed")
	}
	return err
}

// todo

func (here *Db) SearchContent(keyword string, num int, pg int) ([]_struct.Content, int, error) {
	//client := here.client
	contents := make([]_struct.Content, 0)

	//ids, cursor, err := client.HScan(ctx, contentNameToId, 0, "*"+keyword+"*", int64(num)).Result()
	return contents, 0, nil
}

func (here *Db) SearchContent_Category(categoryId uint, keyword string, num int, pg int) ([]_struct.Content, int, error) {
	class := make([]_struct.Content, 0)

	return class, 0, nil

}

func (here *Db) SearchContent_Class(classId uint, keyword string, num int, pg int) ([]_struct.Content, int, error) {

	contents := make([]_struct.Content, 0)

	return contents, 0, nil

}

func (here *Db) SearchContent_Source(sourceId uint, keyword string, num int, pg int) ([]_struct.Content, int, error) {

	contents := make([]_struct.Content, 0)

	return contents, 0, nil
}

func (here *Db) ContentList(num int, pg int) ([]_struct.Content, int, error) {

	contents := make([]_struct.Content, 0)

	return contents, 0, nil
}

func (here *Db) ContentList_Category(categoryId uint, num int, pg int) ([]_struct.Content, int, error) {

	contents := make([]_struct.Content, 0)

	return contents, 0, nil
}

func (here *Db) ContentList_Class(classId uint, num int, pg int) ([]_struct.Content, int, error) {

	contents := make([]_struct.Content, 0)

	return contents, 0, nil
}

func (here *Db) ContentList_Source(sourceId uint, num int, pg int) ([]_struct.Content, int, error) {

	contents := make([]_struct.Content, 0)

	return contents, 0, nil
}

func (here *Db) GetContent(id uint) (_struct.Content, error) {
	var content _struct.Content

	return content, nil
}

func (here *Db) BrowseContentByCategory(categoryId uint, num int, pg int) ([]_struct.Content, int, error) {
	contents := make([]_struct.Content, 0)

	return contents, 0, nil
}

// ContentCount 获取全部影片的数目
func (here *Db) ContentCount() int {
	client := here.client
	num, err := client.SCard(ctx, contentSet).Result()
	if err != nil {
		logrus.Error("redis get content num failed", err)
	}
	return int(num)
}

// 通知redis生成新的sourceId
func (here *Db) newContentId() uint {
	v, err := here.client.Incr(ctx, contentId).Result()
	if err != nil {
		logrus.Error("error ,the new content id generate failed", err)
	}
	return uint(v)
}
