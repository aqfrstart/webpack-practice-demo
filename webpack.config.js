const path = require('path')

/****************************** 引入Plugin  ********************************/
// 自动清理构建目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 创建html
const htmlWebpackPlugin = require('html-webpack-plugin')

/****************************** Loader相关  ********************************/
/**
 * babel-loader 
 * 配置项
 * cacheDirectory: 用于缓存loader的执行结果, 如果设置为true, 之后的webpack构建, 将会尝试读取缓存
 */

 /**
  * cache-loader 在一些性能开销较大的loader之前添加此loader, 可以将结果缓存到磁盘里。
  */


/****************************** 其他配置项  ********************************/
// 忽略node_modules中的node依赖
 const nodeExternals = require('webpack-node-externals')


/****************************** webpack配置  ********************************/

module.exports = {
  mode: 'none',
  target: 'web',
  externals: [nodeExternals()],
  entry: {
    index: './src/index.js',
    util: './src/util/base.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // include: [
        //   path.resolve(__dirname, 'src')
        // ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin(),
    new CleanWebpackPlugin()
  ]
}