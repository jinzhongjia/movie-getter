package getter

import "time"

func (here *Getter) get() {
	for !here.ok {
		select {
		case <-here.ctx.Done():
			// 被取消了，返回
			here.run.Store(false)
			return
		default:
			here.getAll()
		}
	}

	t := time.NewTicker(time.Duration(GetInterval()) * time.Hour)
	defer t.Stop()

	// 此处使用一个自执行匿名函数
	func() {
		here.getDaily()
	}()

	for {
		select {
		case <-here.ctx.Done():
			// 被取消了，返回
			here.run.Store(false)
			return
		case <-t.C:
			here.getDaily()
		}
	}
}

// JudgeGetting 判断是否在采集中
func (here *Getter) JudgeGetting() bool {
	return here.run.Load().(bool)
}
