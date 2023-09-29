override OUT_NAME := movie
override MAKEFLAGS += -rR

.PHONY: all
all: windows linux

# 获取资源

get-src:
	git clone https://github.com/jinzhongjia/newMovie.git --depth=1 src/front
	git clone https://github.com/jinzhongjia/newMovieAdmin.git --depth=1 src/admin

get-front:
	cd src/front; \
	git pull; \
	pnpm install; \
	pnpm build 
	cp -r src/front/dist/ dist/front

get-admin:
	cd src/admin; \
	git pull; \
	pnpm install; \
	pnpm build
	cp -r src/admin/dist/ dist/admin

# 只构建前端资源
src: get-admin get-front

.PHONY: linux
linux: get-admin get-front
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o $(OUT_NAME)

# 只构建linux版本
l:
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o $(OUT_NAME)

.PHONY: windows
windows: get-admin get-front
	CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -ldflags="-s -w" -o $(OUT_NAME).exe

# 只构建windows版本
w:
	CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -ldflags="-s -w" -o $(OUT_NAME).exe

.PHONY: dbuild
dbuild: get-admin get-front
	rm -rf src
	docker buildx build --network=host -t yunyizhiying/movie:latest .

.PHONY: dpush
dpush:
	docker push yunyizhiying/movie:latest

clean:
	rm -rf dist/front
	rm -rf dist/admin
	rm $(OUT_NAME).exe $(OUT_NAME)_windows.exe $(OUT_NAME) $(OUT_NAME)_linux

runl:
	./$(OUT_NAME)

runw:
	.\$(OUT_NAME)

format:
	gofmt -w -l .

release:
	CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -ldflags="-s -w" -o $(OUT_NAME)_windows.exe
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o $(OUT_NAME)_linux
