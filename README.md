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
<script type="text/babel">
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
│   ├── build-page.js         # 编译配置项
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
├── .babelrc                  # babel 配置
└── package.json              # 构建脚本和依赖
```

### 多页面如何配置

配置在`build/build-page.js`里面    


``` javascript
const pageName = 'index'  // 本次要构建的页面

const vendors = ['vue']   // 多个页面公共的模块打包
module.exports = {
  pageName: pageName,
  vendors: vendors,
  entry: {    // 入口配置
    app: './src/view/' + pageName + '/main.js'
  },
  template: './src/view/' + pageName + '/template.html',  // 页面模板
  sourceMap: false,           //  生产环境下是否需要生成sourceMap
  extractCss: true,           // 是否抽取出css
  absolutePath: false,         // 资源引用路径是否为绝对路径  即CDN路径 默认相对路径
  cdnUrl: 'http://cdn/'       // cdn 地址
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
