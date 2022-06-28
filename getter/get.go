package getter

import "time"

func (here *Getter) get() {
	for !here.ok {
		select {
		case <-here.ctx.Done():
			// 被取消了，返回
			return
		default:
			here.getAll()
		}

	}

	t := time.NewTicker(time.Duration(db.GetCollectInterval()) * time.Hour)
	defer t.Stop()

	//此处使用一个自执行匿名函数
	func() {
		here.getDaily()
	}()

	for {
		select {
		case <-here.ctx.Done():
			// 被取消了，返回
			return
		case <-t.C:
			here.getDaily()
		}
	}
}

// 判断是否在采集中
func (here *Getter) JudgeGetting() bool {
	select {
	case <-here.ctx.Done():
		return false
	default:
		return true
	}
}
