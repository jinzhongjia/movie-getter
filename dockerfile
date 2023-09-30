# 第一阶段构建
FROM golang:alpine AS builder

LABEL stage=gobuilder

WORKDIR /build

COPY . .
RUN go build -ldflags="-s -w" -o /app/movie .

# 第二阶段构建
FROM alpine:latest

WORKDIR /app
COPY --from=builder /app/movie /app/movie

EXPOSE 8000

CMD ["/app/movie"]
