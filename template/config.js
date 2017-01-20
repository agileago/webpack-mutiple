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