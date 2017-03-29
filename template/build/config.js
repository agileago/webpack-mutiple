/**
 * 需要构建的页面 一次只构建一个页面
 */
const pageName = require('../page')

const notUseVendor = []          // 不使用公共资源的页面集合
const notExtractCss = []         // 不抽取css的页面
const useAbsolutePath = {        // 使用绝对路径的页面
  example: '//cdn.com/'
}

module.exports = {
  pageName: pageName,
  useVendor: notUseVendor.indexOf(pageName) === -1,           // 是否使用公共资源 需要先运行 np run vendor
  sourceMap: false,           //  生产环境下是否需要js生成sourceMap
  extractCss: notExtractCss.indexOf(pageName) === -1,           // 是否抽取出css
  // 资源引用路径是否为绝对路径 默认为相对路径
  // cdn 地址 绝对路径的地址 如果没有cdn域名请填写 / 默认是相对路径 false
  absolutePath: useAbsolutePath[pageName] == undefined ? false : useAbsolutePath[pageName],
  browsers: ['ios > 7', 'android > 4.1']
}