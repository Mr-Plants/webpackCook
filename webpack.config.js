const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('file-loader')

// webpack的默认配置
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: "main.js",
//     // 输出位置，必须是绝对路径
//     path: path.resolve(__dirname, 'dist')
//   },
//   mode: 'development'
// }


module.exports = {
  entry: './src/index.js',
  output: {
    filename: "main.js",
    // 输出位置，必须是绝对路径
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',  // 配置环境，开发环境源码不会压缩，生产环境会压缩
  // 告诉webpack默认不支持的资源（module）如何处理
  module: {
    rules: [
      {
        test: /\.png$/,
        use: 'file-loader'
      },
      {
        test: /\.js$/,
        // loader执行自下而上，自右向左
        // 当没有配置loader resolve时，需要传入loader的绝对路径使用
        use: [
          path.resolve(__dirname, './loaders/asyncReplaceLoader.js'),
          {
            loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
            options: {
              source: 'world',
              target: 'webpack'
            }
          }
        ]
      }
    ]
  },
  // 在webpack的各个生命周期执行一些操作，比如编译结束压缩代码
  plugins: [new HtmlWebpackPlugin({
    template: "src/index.html",
    title: "😂"
  })]

}
// webpack默认值支持js和json模块，需要打包其他资源需要引入专门的module（loader）
// html-webpack-plugin
