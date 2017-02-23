/**
 * Created by ChenShuai on 2017/2/21.
 */
const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/js/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: 'dist/js'
    },
    module:{
        rules: [
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader?jQuery!expose-loader?$'
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.jsx$/,
                use: [{
                    loader: 'react-hot-loader'
                }]
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },{
                test: /\.sass/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    'css-loader',
                    'scss-loader'
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,//这个文件除外
                loader: 'html-loader'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=../fonts/[name].[ext]'
            }
        ]
    },
    resolve: {
        modules: [ path.resolve(__dirname, 'src'), 'node_modules'],
    },
    plugins: [
        //单独生成html文件
        new HtmlWebpackPlugin({
            filename: '../index.html',//生成的html及存放路径，相对于path
            template: './src/index.html',//载入文件及路径
            publicPath: 'js/',//这是build文件下html文件引用js文件的路径
            chunks: ['index'],//需要引入的chunk，不配置就会引入所有页面的资源
        }),
        // 使用browser-sync实时刷新页面
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['./dist/'] }//会默认访问./build/index.html
        }),
        new ExtractTextPlugin('../css/styles.css')
    ],
};