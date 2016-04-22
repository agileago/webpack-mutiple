/**
 * 需要构建的页面 一次只构建一个页面
 */

var pageName = 'index'

module.exports = {
  pageName: pageName,
  entry: {    // 入口配置
    app: './src/view/' + pageName + '/main.js'
  },
  template: './src/view/' + pageName + '/template.html',  // 页面模板
  sourceMap: true,           //  生产环境下是否需要生成sourceMap
  extractCss: true,           // 是否抽取出css
  absolutePath: false,         // 资源引用路径是否为绝对路径  当项目是部署到根域名下设置此值
  cdnUrl: 'http://cdn/'       // cdn 地址
}