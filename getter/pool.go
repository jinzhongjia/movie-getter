package getter

import (
	"sync"

	"github.com/tidwall/gjson"
)

var resultPool = sync.Pool{
	New: func() interface{} {
		return new(gjson.Result)
	},
}
