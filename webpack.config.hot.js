const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: './src/main.js',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, './dist')
  },
  mode: "development",
  devServer: {
    // 监听的目录
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
