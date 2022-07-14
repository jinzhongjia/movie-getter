# 第一阶段构建
FROM golang:alpine AS builder

LABEL stage=gobuilder

ENV GOPROXY https://goproxy.cn,direct

WORKDIR /build

COPY . .
RUN go build -ldflags="-s -w" -o /app/movie .

# 第二阶段构建
FROM alpine

WORKDIR /app
COPY --from=builder /app/movie /app/movie

EXPOSE 8233

CMD ["/app/movie"]