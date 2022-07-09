package dist

import _ "embed"

//go:embed index.html
var Index string

//go:embed logo.ico

var Icon []byte
