package dist

import embed "embed"

//go:embed front
var Front embed.FS

//go:embed admin
var Admin embed.FS
