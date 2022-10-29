#!/bin/bash

buildLinux() {
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o "${PWD##*/}" .
}

buildWin() {
	CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -ldflags="-s -w" -o "${PWD##*/}".exe .
}

buildMac() {
	CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build -ldflags="-s -w" -o "${PWD##*/}" .
}

help() {
	echo 'usage: sh build.sh command
    - mac   , Compiling programs for Mac 64-bit computers
    - win   , Compiling programs for Windows 64-bit computers
    - linux , Compiling programs for linux 64-bit computers'
}

if [ $# == 0 ] || [ "$1" == "help" ] || [ "$1" == "h" ]; then
	help
elif [ "$1" == "win" ]; then
	buildWin
elif [ "$1" == "linux" ]; then
	buildLinux
elif [ "$1" == "mac" ]; then
	buildMac
else
	help
fi
