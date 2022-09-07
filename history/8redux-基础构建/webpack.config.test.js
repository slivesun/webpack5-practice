const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = (env) => { //env----package.json 中带的变量，有插件可以代替
    console.log(env, '---------------------evn')
    let ObjConfig = {
        mode: 'development', //模式  production 生产    开发
        entry: './src/index.js',
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist'), //输出文件名称
        },
        module: {
            rules: [{
                    test: /\.css$/i,
                    type:'asset/resource',
                    use: ['style-loader', 'css-loader'],
                    include: path.resolve(__dirname, 'src'),//性能优化，将loader 只应用在src中
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    include: path.resolve(__dirname, 'src'),//性能优化，将loader 只应用在src中
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    include: path.resolve(__dirname, 'src'),//性能优化，将loader 只应用在src中
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin(),
        ],
        devServer: {
            host: '0.0.0.0', //所有外部服务（局域网）可以访问自己，但是设置这个后自动打开的话会访问不对，有bug
            port: '6001', //启动端口
        },
    }
    
    return ObjConfig
}