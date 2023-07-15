package manager

// GetStart 开始全局采集和定时采集
func (here *Manager) GetStart() {
	here.getters_mutex.Lock()
	for _, v := range here.getters {
		v.StartGet()
	}
	here.getters_mutex.Unlock()
}

// GetStop 停止全局采集和定时采集
func (here *Manager) GetStop() {
	here.getters_mutex.Lock()
	for _, v := range here.getters {
		v.StopGet()
	}
	here.getters_mutex.Unlock()
}

// GetStartById 根据别名开启全局采集和定时采集
func (here *Manager) GetStartById(id uint) {
	here.getters_mutex.Lock()
	if v, ok := here.getters[id]; ok {
		v.StartGet()
	}
	here.getters_mutex.Unlock()
}

// GetStopById 根据别名关闭全局采集和定时采集
func (here *Manager) GetStopById(id uint) {
	here.getters_mutex.Lock()
	if v, ok := here.getters[id]; ok {
		v.StopGet()
	}
	here.getters_mutex.Unlock()
}
