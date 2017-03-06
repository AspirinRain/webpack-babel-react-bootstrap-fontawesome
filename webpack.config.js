/**
 * Created by ChenShuai on 2017/2/21.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'index': './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
                loader: 'file-loader?name=./fonts/[name].[ext]'
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader?name=./img/[name].[ext]'
            },
            {
                test: /\.ico$/,
                loader: 'file-loader?name=./[name].[ext]'
            }

        ]
    },
    resolve: {
        modules: [ path.resolve(__dirname, 'src'), 'node_modules'],
    },
    plugins: [
        //单独生成html文件
        new HtmlWebpackPlugin({
            filename: './index.html',//生成的html及存放路径，相对于path
            template: './src/index.html',//载入文件及路径
            inject: 'body',
            chunks: true
        }),
        new ExtractTextPlugin('./css/styles.css'),

        new webpack.optimize.CommonsChunkPlugin({
            name:'divider',
            filename: 'components/divider.js'
        })
    ],
};