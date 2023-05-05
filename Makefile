override OUT_NAME := movie

.PHONY: all
all: windows linux

.PHONY: linux
linux:
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o $(OUT_NAME)

.PHONY: windows
windows:
	CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -ldflags="-s -w" -o $(OUT_NAME).exe

.PHONY: dbuild
dbuild:
	docker build --network=host -t yunyizhiying/movie:latest .

.PHONY: dpush
dpush:
	docker push yunyizhiying/movie:latest
