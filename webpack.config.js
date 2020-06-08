const path = require('path')

// webpack的默认配置
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "main.js",
    // 输出位置，必须是绝对路径
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
}

// webpack默认值支持js和json模块，需要打包其他资源需要引入专门的module（loader）
