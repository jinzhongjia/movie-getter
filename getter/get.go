package getter

import "time"

func (here *Getter) Get() {
	for !here.changer {
		select {
		case <-here.ctx.Done():
			// 被取消了，返回
			return
		default:
			here.getAll()
		}

	}

	t := time.NewTicker(24 * time.Hour)
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
