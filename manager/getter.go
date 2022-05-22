package manager

// 停止全局采集和定时采集
func (here *Manager) GetStart() {
	for _, v := range here.Getters {
		v.StartGet()
	}
}

// 开始全局采集和定时采集
func (here *Manager) GetStop() {
	for _, v := range here.Getters {
		v.StopGet()
	}
}

// 根据别名开启全局采集和定时采集
func (here *Manager) GetStartByAlias(name string) {
	if v, ok := here.Getters[name]; ok {
		v.StartGet()
	}
}

// 根据别名关闭全局采集和定时采集
func (here *Manager) GetStopByAlias(name string) {
	if v, ok := here.Getters[name]; ok {
		v.StopGet()
	}
}



