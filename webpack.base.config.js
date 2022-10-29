const path = require('path');
const webpack = require('webpack');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  plugins: [
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, 'dist/dll/vendor.dll.js')
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, 'dist/dll/vendor-manifest.json')
    })
  ]
}