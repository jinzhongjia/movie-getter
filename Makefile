override OUT_NAME := movie
override MAKEFLAGS += -rR

.PHONY: all
all: windows linux

# 获取资源
get:
	git clone https://github.com/jinzhongjia/newMovie.git --depth=1 src/front
	git clone https://github.com/jinzhongjia/newMovieAdmin.git --depth=1 src/admin

sync-src:
	cd src/front; \
	git pull
	cd src/admin; \
	git pull

build-front: sync-src
	cd src/front; \
	pnpm install; \
	pnpm build 
	cp -r src/front/dist/ dist/front

build-admin: sync-src
	cd src/admin; \
	pnpm install; \
	pnpm build
	cp -r src/admin/dist/ dist/admin

# 只构建前端资源
src: build-admin build-front

.PHONY: linux
linux: build-admin build-front
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o $(OUT_NAME)

# 只构建linux版本
l:
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o $(OUT_NAME)

.PHONY: windows
windows: build-admin build-front
	CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -ldflags="-s -w" -o $(OUT_NAME).exe

# 只构建windows版本
w:
	CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -ldflags="-s -w" -o $(OUT_NAME).exe

.PHONY: dbuild
dbuild: build-admin build-front
	rm -rf src
	docker buildx build --network=host -t yunyizhiying/movie:latest .

.PHONY: dpush
dpush:
	docker push yunyizhiying/movie:latest

clean:
	rm -rf dist/front
	rm -rf dist/admin

runl:
	./$(OUT_NAME)

runw:
	.\$(OUT_NAME)

format:
	gofmt -w -l .
