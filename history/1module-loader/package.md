## package 笔记
``` JavaScript
// npm 配置命令、工具、插件等的文件
{
  "name": "project-auto",//项目名称
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": { //配置webpack执行命令
    "dev": "webpack --config webpack.config.js",
    "build": "webpack",
    "watch": "webpack --watch",//自动编辑监听，不可自动刷新页面
    "start": "webpack serve --open",//devServe插件启动命令 --open 为自动打开
    "server": "node server.js",//执行server文件，以node服务形式启动项目
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {//生产环境需要的插件loader.依赖
    "html-webpack-plugin": "^5.5.0",
    "sass-loader": "^13.0.2",
    "ts-loader": "^9.3.1",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0"
  },
  "dependencies": {//开发所需插件依赖
    "lodash": "^4.17.21",
    "webpack-dev-server": "^4.10.0"
  }
}
