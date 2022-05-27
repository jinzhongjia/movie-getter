package manager

// 开始全局采集和定时采集
func (here *Manager) GetStart() {
	for _, v := range here.Getters {
		v.StartGet()
	}
}

// 停止全局采集和定时采集
func (here *Manager) GetStop() {
	for _, v := range here.Getters {
		v.StopGet()
	}
}

// 根据别名开启全局采集和定时采集
func (here *Manager) GetStartById(id uint) {
	if v, ok := here.Getters[id]; ok {
		v.StartGet()
	}
}

// 根据别名关闭全局采集和定时采集
func (here *Manager) GetStopById(id uint) {
	if v, ok := here.Getters[id]; ok {
		v.StopGet()
	}
}
