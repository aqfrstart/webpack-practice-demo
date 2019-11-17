# webpack-practice-demo

# webpack实践练习案例

### day1: 基础配置

1. **webpack4五大基础概念**
   - `mode`：模式，支持'none'，'development'，'production'三种模式。启用模式不同，会使用不同的配置项进行优化。
   - `entry`：构建打包入口。
   - `output`：打包文件输出。
   - `loader`：webpack开箱即用的仅支持`.json`和`.js`文件，其他文件需要通过不同的loader来配置。
   - `plugin`：用于解决loader无法实现的其他事。可以通过plugin干涉打包构建过程。

