// 打包HTML的插件 
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 打包CSS的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 拷贝的插件 一些不不需要打包的可以用这个插件拷贝
const CopyPlugin = require('copy-webpack-plugin');
// 在打包前先清空产出的文件夹 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',  //环境
    entry: './src/index.js', //入口文件
    output: { //输出（打包后文件的）的位置  和文件的名称
        path: __dirname + "/dist",
        filename: 'index.js'
    },
    module: { //配置loader
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [ //配置插件的
        new HtmlWebpackPlugin({
            title: 'htmlplugin', //插件的对象的options 更多的option查看官方的文档
            filename: 'index.html',
            template: './src/index.html',
            minify: false,
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static', to: 'static' },
                { from: './src/data', to: 'data' },
            ],
        }),
        new CleanWebpackPlugin()
    ],
    devServer:{  //服务配置
        port:9999, //端口号
        open:true
    }

}