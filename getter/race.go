package getter

import (
	"sync"
)

var (
	rw       sync.RWMutex
	interval int
)

func GetInterval() int {
	rw.RLock()
	defer rw.RUnlock()
	return interval
}

func ChangeInterval(tmp int) {
	rw.Lock()
	defer rw.Unlock()
	interval = tmp
}
