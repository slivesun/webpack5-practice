## package 笔记
``` JavaScript
// npm 配置命令、工具、插件等的文件
{
  "name": "project-auto",//项目名称
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": { //配置webpack执行命令
    "dev": "webpack serve --env mode=development  --progress=profile",//本地启动命令  --env webpack变量需要 webpack 写成导出函数 形参接收  --progress :webpack 的编译进度.  --progress=profile收集编译过程中每一步的 profile 数据
    "build-dev": "webpack --config webpack.config.js --env mode=development",//打包开发环境包
    "build-test": "webpack --config webpack.config.js --env mode=production",//打包生产环境包
    "watch": "webpack --watch",//自动编辑监听，不可自动刷新页面
    "start": "webpack serve --open",//devServe插件启动命令 --open 为自动打开
    "server": "node server.js",//执行server文件，以node服务形式启动项目,相当于服务端启动
    "build-other": "webpack serve --config webpack.config.test.js",//启动其它webpack文件
    "start": "http-server dist",//可以使应用离线使用
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {//开发环境需要的插件loader.依赖
    "html-webpack-plugin": "^5.5.0",
    "sass-loader": "^13.0.2",
    "ts-loader": "^9.3.1",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0"
  },
  "dependencies": {//生产所需插件依赖
    "lodash": "^4.17.21",
    "webpack-dev-server": "^4.10.0"
  }
}
