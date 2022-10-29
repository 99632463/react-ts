const path = require('path');
const { ESLINT } = require('./control');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  env = env || { development: true };

  return {
    ...env.development ? require('./webpack.development') : require('./webpack.production'),
    entry: path.resolve(__dirname, '../src'),
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.less', '.scss'],
      alias: {
        '@business': path.resolve(__dirname, '../src/business'),
        '@common': path.resolve(__dirname, '../src/common'),
        '@components': path.resolve(__dirname, '../src/components'),
        '@container': path.resolve(__dirname, '../src/container'),
        '@store': path.resolve(__dirname, '../src/store')
      }
    },
    performance: { hints: false },   //关闭黄色警告
    devServer: {
      // contentBase: path.resolve(__dirname, '../dist'),
      port: 9066,
      overlay: true,   //代码出错弹出浮动层
      compress: true,   //服务器返回浏览器时的什么压缩   （这个我也不知道是什么鬼）
      // historyApiFallback: true, // 该选项的作用所有的404都连接到index.html
      // proxy: {
      //   // 代理到后端的服务地址，会拦截所有以api开头的请求地址
      //  "/api": "http://localhost:3000",
      //   '/api': {
      //     target: 'https://localhost:3000',
      //     changeOrigin: true,     // target是域名的话，需要这个参数，
      //     secure: false,          // 设置支持https协议的代理
      //   }
      // }
    },
    optimization: {
      splitChunks: {
        chunks: 'all'   // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  "@babel/preset-env",
                  "@babel/preset-react",
                  "babel-preset-mobx"
                ],
                plugins: ["@babel/plugin-transform-runtime","dynamic-import-webpack"]
              }
            },
            ...ESLINT ? ['eslint-loader'] : []
          ]
        },
        {
          test: /(\.ts|tsx)$/,
          exclude: /node_modules/,
          loader: "ts-loader"
        },
        {
          test: /\.css$/,
          // exclude: /node_modules/,
          // use: ['style-loader', 'css-loader', {
          //   loader: 'postcss-loader',
          //   options: {
          //     plugins: [
          //       require('autoprefixer')
          //     ],
          //     exclude: /node_modules/
          //   }
          // }]
          use: ExtractTextWebpackPlugin.extract({
            use: ['css-loader', 'postcss-loader']
          })
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
          test: /\.(eot|svg|ttf|woff2?)$/,
          exclude: /node_modules/,
          loader: 'url-loader',
          options: {
            outputPath: 'fonts/',
            limit: 4 * 1024
          }
        },
        {
          test: /\.(jpg|png|gif|bmp|svg|jpeg)$/,
          exclude: /node_modules/,
          loader: 'url-loader',
          options: {
            outputPath: 'imgs/',
            limit: 4 * 1024
          }
        }
      ]
    }
  }
}