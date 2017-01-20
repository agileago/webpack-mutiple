### 多页面vue2/webpack2构建配置

使用vue来写一些单页面很舒服,官方也有很健全的配置starter,但一般在业务生产中都不可能是单页面,往往需要做很多页面,需要
多人来配合来写,这个时候就需要进行项目的工程化,特别是针对前后端分离的项目,后端只提供json格式的数据,前端负责渲染页面和各种
路由处理,所以需要一个多页面的配置来进行开发指导,这个项目需要是实现的功能如下:

1.  使用ES6(并且使用webpack2的tree-shaking功能进行缩减代码)
2.  组件化`*.vue`开发
3.  功能模块化
4.  静态资源压缩
5.  静态资源破缓存(hash)
6.  开发环境下页面自动刷新或者热替换
7.  支持多页面
8.  公共资源缓存

#### 项目说明
> -- config.js             编译页面配置

> -- build                 构建文件存放   

> -- dist                  输出目录 把此文件放入cdn或者给后端    

>--  lib                    全局使用的外部库    

>--  src                    业务源代码   
>---- common                页面公共组件      
>---- view                  页面源码 每个页面是个单独的文件夹 所使用的图片等资源在每个页面的文件夹里面    


### 使用说明
团队里面每个人在开始开发页面之前,需要在`config.js`配置一下需要开发的页面        

### 首先打包公共资源vendor, 公共资源配置在 `package.json`中，统一管理
```
npm run vendor
```
如果生成的有css文件模块,需要在`manifest.json`文件里面把`css`模块的meta重写成{},不然最终编译后会带有css文件

开发环境下使用
```bash
npm run dev
```
命令进行开发,在浏览器里面打开[0.0.0.0:8080](http://0.0.0.0:8080),已配置自动刷新和热替换    

开发完成后使用
```bash
npm run build
```
命令进行打包 `dist`文件夹里面即是最终的发布文件


### `config.js`内容详解 
注：（`config.js`需要被项目忽略掉，每个组员需要自己新建`config.js`并且禁止提交）

```javascript
/**
 * 需要构建的页面 一次只构建一个页面
 */
const pageName = 'index'

module.exports = {
  pageName: pageName,
  useVendor: true,           // 是否使用公共资源 需要先运行 np run vendor
  sourceMap: false,           //  生产环境下是否需要js生成sourceMap
  extractCss: true,           // 是否抽取出css
  // 资源引用路径是否为绝对路径 默认为相对路径
  // cdn 地址 绝对路径的地址 如果没有cdn域名请填写 / 默认是相对路径 false
  absolutePath: false,
  // https://github.com/ai/browserslist#queries  前缀配置列表
  // 查看你的配置支持的浏览器  http://browserl.ist/
  browsers: ['ios > 6', 'android > 2.1']  // css自动加前缀 配置支持的浏览器
}
```
