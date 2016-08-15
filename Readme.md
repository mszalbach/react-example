
# Introduction
[![Build Status](https://travis-ci.org/mszalbach/react-example.svg?branch=master)](https://travis-ci.org/mszalbach/react-example)

Sample project to use [React](https://facebook.github.io/react/).

# Usage
Maven is used to easily install node and npm. 

```bash
mvn package
```
## NPM start
After that you can use the mnpm command as wrapper to use the maven installed npm.

```bash
./mnpm start
```

And you can visit the app at <http://localhost:8080>.

## Simple Browser
Or simple start the built/index.html file in any browser.

## Docker
You can use the Dockerfile to build your own image and start it or simply use docker-compose.
```bash
docker-compose up
```


