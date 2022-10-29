const path = require('path');
const webpack = require('webpack');

const src = path.resolve(process.cwd(), '../src');    //源码目录
const evn = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode: 'production',
  entry: {
    vendor: [
      "react",
      "react-dom"
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist/dll'),
    filename: '[name].dll.js'
  },
  plugins: [
    new webpack.DllPlugin({
      context: process.cwd(),

      // manifest.json文件的输出位置
      path: path.resolve(__dirname, '../dist/dll/[name]-manifest.json'),
    })
  ]
}