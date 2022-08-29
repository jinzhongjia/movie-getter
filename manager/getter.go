package manager

// GetStart 开始全局采集和定时采集
func (here *Manager) GetStart() {
	for _, v := range here.getters {
		v.StartGet()
	}
}

// GetStop 停止全局采集和定时采集
func (here *Manager) GetStop() {
	for _, v := range here.getters {
		v.StopGet()
	}
}

// GetStartById 根据别名开启全局采集和定时采集
func (here *Manager) GetStartById(id uint) {
	if v, ok := here.getters[id]; ok {
		v.StartGet()
	}
}

// GetStopById 根据别名关闭全局采集和定时采集
func (here *Manager) GetStopById(id uint) {
	if v, ok := here.getters[id]; ok {
		v.StopGet()
	}
}
