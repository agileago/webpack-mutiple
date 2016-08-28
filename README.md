# vue-webpack-mutiple-boilerplate
这个模板主要为开发多页面而创建   

推荐使用`webstorm`12以上版本进行开发,因为12以上版本支持行内`sass/less`,并且拥有强大的智能提示,这样我们就可以把一些公共函数、变量定义到外面,轻松
使用`sass/less`强大的编程功能书写css,例如:

``` html
<template>
  <div>
      <p class="comp">comp</p>
  </div>
</template>
<script>
  export default {
  }
</script>

<style lang="scss" rel=stylesheet/scss>
  @import "variable";
  @import "fn";
  
  .comp {
    color: $default;      // $default 是预先定义的主题颜色
    height: px2rem(50); // px2rem函数是一些辅助函数
  }

</style>
```

### 使用

这是一个[vue-cli](https://github.com/vuejs/vue-cli).的项目模板

``` bash
$ npm install -g vue-cli
$ vue init agileago/webpack-mutiple my-project
$ cd my-project
$ npm install
$ npm run dev
```

### 目录结构

``` bash
.
├── build                       # 构建脚本
│   ├── dev-server.js         # development server script
│   ├── webpack.base.conf.js  # shared base webpack config
│   ├── webpack.dev.conf.js   # development webpack config
│   ├── webpack.prod.conf.js  # production webpack config
│   └── ...
├── src
│   ├── common               # 多个页面公用的组件或者功能库
│   │   └── components      # 公用组件
│   │   └── util              # 公用工具库
│   ├── view                   # 多页面开发文件夹
│   │   └── index             # index页面
│   │      └── assets         # index页面的静态资源如图片等
│   │      └── components    # index页面需要的组件
│   │      └── main.js        # index页面入口文件
│   │      └── template.html # index页面html模板
│   │   └── detail             # detail 页面
│   │      └── ...             # detail页面资源类index 
├── lib                       # 外部静态资源未包含在npm中的库
├── dist                      # 输出目录即发布目录
├── config.js                  # 页面编译配置
├── .babelrc                  # babel 配置
└── package.json              # 构建脚本和依赖
```

### 多页面如何配置

配置在`config.js`里面    


``` javascript
/**
 * 需要构建的页面 一次只构建一个页面
 */
const pageName = 'index'
// 大部分页面都要用到的公共库
const vendors = [
  'vue',
  'weui'
]

module.exports = {
  pageName: pageName,
  vendors: vendors,
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
### tips

当想在工程里面引入`node_modules`下工程某些源代码,但这些源代码有可能是es6语法的,可直接在webpack的
loader里面添加
```javascript
{
  test: /vux.src.*?js$/
}
```
就是模块名 . 源码文件夹 js文件
