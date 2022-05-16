package manager

// 开始所有采集
func (here *Manager) GetStop() {
	for _, v := range here.Getters {
		v.StopGet()
	}
}

// 停止所有采集
func (here *Manager) GetStart() {
	for _, v := range here.Getters {
		v.StartGet()
	}
}
