const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // filename: 'demo.html',    //最终创建的文件名，未指定默认为模板文件名
      template: path.resolve(__dirname, '../index.html'),
      // hash: true   //清除缓存
    }),
    new CleanWebpackPlugin(),
    new ExtractTextWebpackPlugin('index.css'),
    new webpack.ProvidePlugin({
      '$': 'jquery'
    })
  ]
}