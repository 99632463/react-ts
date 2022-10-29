const path = require('path');
const webpack = require('webpack');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TslintWebpackPlugin = require('tslint-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { STYLELINT, TSLINT } = require('./control');


module.exports = {
  mode: "development",
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    ...STYLELINT ? [new StylelintWebpackPlugin({
      files: ['**/*.css', '**/*.less', '**/*.scss', '**/*.html', '**/*.htm']
    })] : [],
    ...TSLINT ? [new TslintWebpackPlugin({
      files: ['../src/**/*.ts']
    })] : [],
    new HtmlWebpackPlugin({
      // filename: 'demo.html',    //最终创建的文件名，未指定默认为模板文件名
      template: path.resolve(__dirname, '../index.html'),
      // hash: true   //清除缓存
    }),
    new CleanWebpackPlugin(),
    new ExtractTextWebpackPlugin('./main.css'),
    new webpack.ProvidePlugin({
      '$': 'jquery'
    })
  ],
  devtool: 'source-map'
}