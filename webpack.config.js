const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackBar = require('webpackbar')
const WorkboxPlugin = require('workbox-webpack-plugin');
// 尝试使用环境变量，否则使用根路径
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = (env) => { //env----package.json 中带的变量，有插件可以代替
    console.log(env, '---------------------evn')
    let ObjConfig = {
        mode: env.mode, //模式  production 生产   development 开发
        entry: { //可以实现分包（代码分离，但是比较繁琐复杂重复模块会重复打包）
            index: './src/index.ts',
            // index: './src/index.js',
            //   another: './src/another-module.js',
            //   print: './src/print.js',
            // index: {
            //     import: './src/index.js',
            //     dependOn: 'shared',
            // },
            // another: {
            //     import: './src/another-module.js',
            //     dependOn: 'shared',
            // },
            // shared: 'lodash',
        },
        // 'source-map' : 'cheap-module-source-map'
        devtool: env.mode == 'development' ? 'inline-source-map' : 'source-map', //控制台打印报错，生产环境不要用属于开发工具,会生成js.map文件
        output: {
            // filename: 'bundle.js',
            // filename: '[name][fullhash].bundle.js', //js打包名称
            filename: '[name].[chunkhash:6].js',
            chunkFilename: '[name].js', //非入口文件名称
            path: path.resolve(__dirname, 'dist'), //输出文件名称
            clean: true, //清除打包文件重新打包
            publicPath: ASSET_PATH, //公共路径
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        module: {
            rules: [{
                    test: /\.css$/i,
                    type: 'asset/resource',
                    use: ['style-loader', 'css-loader'],
                    include: path.resolve(__dirname, 'src'), //性能优化，将loader 只应用在src中
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    include: path.resolve(__dirname, 'src'), //性能优化，将loader 只应用在src中
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    include: path.resolve(__dirname, 'src'), //性能优化，将loader 只应用在src中
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ]
        },
        plugins: [
            // new webpack.ProgressPlugin(), //监控各个hook执行的进度percentage，输出各个hook的名称和描述
            new HtmlWebpackPlugin({ //插件的基本作用就是生成html文件。
                title: '啊实打', //更改标签头部内容，有模板时不生效
                filename: 'index.html', //打包输出的文件名
                template: './index.html', //引用模板
                favicon: path.resolve(__dirname, './src/assets/icon.png'), //标签页 icon
                // base:'http://q',//设置获取资源基本路径，（'http://www.baidu.com）
                minify: 0 ? {
                    collapseWhitespace: true, //是否折叠空白
                    keepClosingSlash: true, //是否关闭斜杠
                    removeComments: true, //删除注释
                    removeRedundantAttributes: true, //删除脚本类型属性
                    removeScriptTypeAttributes: true, //移出样式连接类型属性
                    removeStyleLinkTypeAttributes: true, //使用短文档类型
                    useShortDoctype: true
                } : false, //mode是'production' 开启压缩
                // hash: true, //是否启用增加文件名hash，可以防止缓存丢失
            }),
            // new webpack.HotModuleReplacementPlugin(),//r热更新插件
            // env.analz ? new BundleAnalyzerPlugin() : null, //代码分析插件
            // new WebpackBar(), //打包进度条插件
            // new WorkboxPlugin.GenerateSW({//渐进式网络应用程序 在**离线(offline)**时应用程序能够继续运行功能
            //     // 这些选项帮助快速启用 ServiceWorkers
            //     // 不允许遗留任何“旧的” ServiceWorkers
            //     clientsClaim: true,
            //     skipWaiting: true,
            // }),
            // new webpack.DefinePlugin({// 这可以帮助我们在代码中安全地使用环境变量
            //     'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
            // }),
        ],
        devServer: {
            static: false, //'./dist',//该配置项允许配置从目录提供静态文件的选项（默认是 'public' 文件夹）。将其设置为 false 以禁用
            host: '0.0.0.0', //所有外部服务（局域网）可以访问自己，但是设置这个后自动打开的话会访问不对，有bug
            port: '6001', //启动端口
            hot: true, //热模块替换更新 
            open: false, //是否自动打开浏览器
            compress: true, //启用gzip,打包压缩
            proxy: [{
                context: ['/api', '/sk-ep'],
                target: 'http://localhost:3000',
                pathRewrite: 1 ? { //重写默认路径
                    '^/api': ''
                } : null,
            }, ],
            client: {
                progress: true, //浏览器显示打包百分比
                // overlay: false, //报错信息是否显示在屏幕
                overlay: {
                    warnings: true,
                    errors: true
                }, //报错信息是否显示在屏幕
            },
        },
        optimization: {
            runtimeChunk: 'single',
            usedExports: true,
            moduleIds: 'deterministic', //保证splitChunks-cacheGroups拆分出的文件hash名称不变提升打包速度
            splitChunks: { //分离各种文件作用：将不长变更的依赖包抽离打包，将经常改的业务文件单独打包，打包时共用文件只需打包一份速度会有质的提高
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
                chunks: 'all',
            },
        },

        // optimization: { //代码分离将重复模块抽离不在重复打包
        //     splitChunks: {
        //         // chunks：async：chunks的默认值，提取异步加载的模块，打包成单独文件。
        //         // chunks：initial：提取异步和同步加载的模块(普通import不属于同步也不属于异步)，打包成单独文件，就算这个文件被同步引入了，也被异步引入了，也会打包成两个文件。
        //         // chunks：all: 提取异步和同步加载的模块，就算这个文件被同步引入了，也被异步引入了，也会打包成一个文件。
        //         chunks: 'all',
        //     },
        // },
    }
    if (env.analz) { //代码分析插件 命令行有  analz 变量 启用分析插件
        ObjConfig.plugins.push(new BundleAnalyzerPlugin())
    }

    return ObjConfig
}