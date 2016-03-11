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

webstorm 配置 [webstorm-settings](https://raw.githubusercontent.com/agileago/webpack/master/settings.jar)

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

### 都包含什么

- `npm run dev`: 开发环境执行命令
  - Webpack + `vue-loader` 编译`*.vue`文件
  - 热更新
  - 错误即时显示
  - Source maps
  - Sass

- `npm run build`: 生产环境编译命令
  - 压缩js代码 [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - 压缩html [html-minifier](https://github.com/kangax/html-minifier).
  - 抽取css和css压缩 [cssnano](https://github.com/ben-eb/cssnano).
  - 静态资源加上hash戳并且自动注入到`index.html`中

###  `lib/`

一些没有在npm里面的库,或者一些没法纳入webpack这个构建系统里面的文件,放入lib里面,lib直接拷贝到发布目录`dist`

### 多页面如何配置

配置在`build/build-page.js`里面    


``` javascript
module.exports = {
  pageName: 'index',  // 入口文件夹名称
  entry: {    // 入口配置
    app: './src/view/index/main.js'
  },
  template: './src/view/index/template.html',  // 页面模板
  extractCss: true,           // 是否抽取出css
  absolutePath: false,         // 资源引用路径是否为绝对路径  当项目是部署到根域名下设置此值
  sourceMap: true           //  生产环境下是否需要生成sourceMap
}
```
