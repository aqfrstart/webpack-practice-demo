# webpack-practice-demo

# webpack实践练习案例

### day1: 基础配置

1. **webpack4五大基础概念**
   - `mode`：模式，支持'none'，'development'，'production'三种模式。启用模式不同，会使用不同的配置项进行优化。
   - `entry`：构建打包入口。
   - `output`：打包文件输出。
   - `loader`：webpack开箱即用的仅支持`.json`和`.js`文件，其他文件需要通过不同的loader来配置。
   - `plugin`：用于解决loader无法实现的其他事。可以通过plugin干涉打包构建过程。

2.  **dev**开发中

一. 开发模式

`	观察模式`： 使用 `watch`命令开启观察模式，此方式不会自动刷新浏览器

`webpack-dev-server`: 一个简单的web服务器，能够`实时重新加载`

`webpack-dev-middleware`: 一个容器，它可以把webpack处理后的文件传递给一个服务器(server)。webpack-dev-server在内部使用了它

二. 模块热替换

`Hot Module Replacement`: 模块热替换

​	

