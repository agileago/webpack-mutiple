/**
 * 需要构建的页面 一次只构建一个页面
 * @type {{entry: {app: string}, template: string, extractCss: boolean, absolutePath: boolean}}
 */

module.exports = {
  pageName: 'index',
  entry: {    // 入口配置
    app: './src/view/index/main.js'
  },
  template: './src/view/index/template.html',  // 页面模板
  extractCss: true,           // 是否抽取出css
  absolutePath: false,         // 资源引用路径是否为绝对路径  当项目是部署到根域名下设置此值
  sourceMap: true           //  生产环境下是否需要生成sourceMap
}