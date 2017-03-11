# webpack-mutiple
### vue多页面开发脚手架

vue官方只提供了单页面的脚手架，但我们可以根据它来改造成多页面，开发的时候我们每次只开发一个页面，而不是同时开发多个页面，所以项目根路径下应该有个配置js，来指明这次要开发的页面

### 工具推荐
1. 最新版webstorm
2. 使用[yarn](https://yarnpkg.com/)安装依赖（提供lock功能） 国内用户请使用淘宝源   
`yarn config set registry https://registry.npm.taobao.org`    
3. node-sass安装失败解决方案
`SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install node-sass`

### 使用

这是一个[vue-cli](https://github.com/vuejs/vue-cli).的项目模板

``` bash
$ npm install -g vue-cli
$ vue init agileago/webpack-mutiple my-project
$ cd my-project
$ npm install （或者 yarn）
$ npm run vendor
$ npm run dev
$ npm run build
```

### 多页面如何配置

配置在`config.js`里面    


``` javascript
/**
 * 需要构建的页面 一次只构建一个页面
 */
const pageName = 'index'

// 大部分情况下都是默认配置

const notUseVendor = []          // 不使用公共资源的页面集合
const notExtractCss = []         // 不抽取css的页面
const useAbsolutePath = {        // 使用绝对路径的页面
  example: '//cdn.com/'
}

module.exports = {
  pageName: pageName,
  useVendor: notUseVendor.indexOf(pageName) === -1,           // 是否使用公共资源 需要先运行 np run vendor
  extractCss: notExtractCss.indexOf(pageName) === -1,           // 是否抽取出css
  // 资源引用路径是否为绝对路径 默认为相对路径
  // cdn 地址 绝对路径的地址 如果没有cdn域名请填写 / 默认是相对路径 false
  absolutePath: useAbsolutePath[pageName] == undefined ? false : useAbsolutePath[pageName],
  sourceMap: false,           //  生产环境下是否需要js生成sourceMap
  browsers: ['ios > 7', 'android > 4.1']
}
```

### 公共资源 vendor
多个页面需要共享资源库，利用webpack的dll功能生成vendor, vendor的配置在 `package.json`中的`vendor`选项

``` json
"vendor": [
  "vue",
  "es6-promise",
  "weui"
],
```

### 生成页面
每做一个新页面需要在`src/views/`下面生成一个页面文件夹，文件夹里面需要包含一个入口文件 `main.js` 和页面模板文件 `template.html`,具体请看`index`示例页面

### tips

当想在工程里面引入`node_modules`下工程某些源代码,但这些源代码有可能是es6语法的,可直接在webpack的
loader里面添加
```javascript
{
  test: /vux.src.*?js$/,
  loader: 'babel-loader'
}
```
就是模块名 . 源码文件夹 js文件
