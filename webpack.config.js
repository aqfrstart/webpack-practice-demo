const path = require('path')

/****************************** 引入Plugin  ********************************/
// 自动清理构建目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 创建html
const htmlWebpackPlugin = require('html-webpack-plugin')
// 打包压缩工具
const TerserPlugin = require('terser-webpack-plugin')

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
  // externals: [nodeExternals()],
  entry: {
    index: './src/index.js',
    util: './src/util/base.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  /****************************** 优化相关(optimization)  ********************************/
  optimization: {
    // 告知webpack使用TerserPlugin压缩bundle
    // minimize: true,
    // 自定义压缩, 覆盖默认压缩工具
    minimizer: [
      new TerserPlugin({
        // 开启缓存
        cache: true,
        // 多进程打包, 默认进程数: os.cpus().length - 1.
        parallel: true
      })
    ]
  },
  /****************************** 解析(resolve)  ********************************/
  resolve: {
    // 创建import或require的别名, 来确保模块引入变得更简单
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
    // 用于描述的json文件，默认是package.json
    descriptionFiles: ['package.json'],
    // 对于文件强制其必须添加扩展名, 设置为true会导致部分npm包出问题
    // enforceExtension: true,
    // 对于模块强制其必须添加扩展, 设置为true会导致部分npm包出问题
    // enforceModuleExtension: true,
    // 自动解析确定的扩展
    extensions: ['.js', '.vue', '.json'],
    // 对于一个npm包, 指定将从哪个字段去解析, 与设置的target字段有关
    mainFields: ['browser', 'module', 'main'],
    // 解析目录时要使用的文件名
    mainFiles: ['index'],
    // 解析模块时应该搜索的目录  FIXME: 依赖解析相关！！ 请注意
    modules: ['node_modules'],
    // 启用不安全缓存, 主动缓存模块
    unsafeCache: true,
    // 额外的解析插件
    plugins: []
  },
  // 配置与resolve对象属性集合相同, 但仅用于解析webpack的loader包
  resolveLoader: {
    modules: ['node_modules'],
    extensions: ['.js', '.json'],
    mainFields: ['loader', 'main'],
    // 配置此选项, 可以不使用loader的全名, 如babel-loader可以替换为babel
    moduleExtensions: ['-loader']
  },
  /****************************** 开发工具(dev-tool)  ********************************/
  devtool: 'inline-source-map',
  /****************************** 开发运行时  ********************************/
  devServer: {
    // contentBase: '/build',
    host: '0.0.0.0',            // 设置此项可以被外网访问
    // port: 18080,                 // 指定要监听的端口号
    hot: true,                  // 启用模块热替换
    noInfo: true,               // 不再显示webpack打包信息
    overlay: {
      errors: true
    },
    open: true                // 默认自动打开浏览器
  },
  /****************************** loader  ********************************/
  module: {
    rules: [
      {
        test: /\.js$/,
        // include: [
        //   path.resolve(__dirname, 'src')
        // ],
        exclude: /node_modules/,
        use: {
          loader: 'babel'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  /****************************** plugin  ********************************/
  plugins: [
    new htmlWebpackPlugin(
      {
        template: 'index.html'
      }
    ),
    new CleanWebpackPlugin()
  ]
}