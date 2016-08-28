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
  // cdn 地址 绝对路径的地址 如果没有cdn域名请填写 /
  absolutePath: '/',
  // https://github.com/ai/browserslist#queries
  // see your config support browser  http://browserl.ist/
  browsers: ['ios > 6', 'android > 2.1']  // css自动加前缀 配置支持的浏览器
}