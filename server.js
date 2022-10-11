// const express = require('express');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');

// const app = express();
// const config = require('./webpack.config.js');
// const compiler = webpack(config);

// // 告知 express 使用 webpack-dev-middleware，
// // 以及将 webpack.config.js 配置文件作为基础配置。
// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );

// // 将文件 serve 到 port 3000。
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!\n');
// });







const express = require('express')
const path = require('path')
const port = process.env.PORT || 9999
const app = express()
 
// 通常用于加载静态资源
app.use(express.static(__dirname + 'dist'))
 
// 在你应用 JavaScript 文件中包含了一个 script 标签
// 的 index.html 中处理任何一个 route
app.get('*', function (request, response){
 response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})
 
app.listen(port)
console.log("server started on port " + port)