const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    devtool: 'source-map', //控制台打印报错，生产环境不要用属于开发工具,会生成js.map文件
    output: {
        // filename: 'bundle.js',
        filename: '[name][fullhash].bundle.js', //js打包名称
        path: path.resolve(__dirname, 'dist'), //输出文件名称
        clean: true, //清除打包文件重新打包
        publicPath: '/',//公共路径
    },
    plugins: [
        // new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development', //更改标签头部内容，有模板时不生效
            filename: 'index.html', //打包输出的文件名
            template: './index.html', //引用模板
            favicon: path.resolve(__dirname, './src/assets/icon.png'), //标签页 icon
            // base:'http://q',//设置获取资源基本路径，（'http://www.baidu.com）
            minify: 0 ? {
                collapseWhitespace: false, //是否折叠空白
                keepClosingSlash: false, //是否关闭斜杠
                removeComments: false, //删除注释
                removeRedundantAttributes: true, //删除脚本类型属性
                removeScriptTypeAttributes: true, //移出样式连接类型属性
                removeStyleLinkTypeAttributes: true, //使用短文档类型
                useShortDoctype: true
            } : true, //mode是'production' 开启压缩
            hash: true, //是否启用增加文件名hash，可以防止缓存丢失
        })
    ],
    devServer: {//本地起服务
        static: false, //'./dist',//该配置项允许配置从目录提供静态文件的选项（默认是 'public' 文件夹）。将其设置为 false 以禁用
        host: '0.0.0.0', //所有外部服务（局域网）可以访问自己，但是设置这个后自动打开的话会访问不对，有bug
        port: '6001', //启动端口
        hot: true, //热模块替换更新 
        open: false, //是否自动打开浏览器
        compress: true,//启用gzip,打包压缩
        proxy: [{
            context: ['/api', '/sk-ep'],
            target: 'http://localhost:3000',
            pathRewrite: 1 ? {//重写默认路径
                '^/api': ''
            } : null,
        }, ],
        client: {
            progress: true, //浏览器显示打包百分比
        },
    },
    optimization: {
        runtimeChunk: 'single',
    },
}