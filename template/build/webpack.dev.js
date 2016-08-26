var webpack = require('webpack')
var config = require('./webpack.base.js')
var cssLoaders = require('./css-loaders')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var page = require('./build-page')

config.devtool = 'source-map'

config.vue = config.vue || {}
config.vue.loaders = config.vue.loaders || {}
cssLoaders({ sourceMap: false, extract: false }).forEach(function (loader) {
  config.vue.loaders[loader.key] = loader.value
})

config.entry.app = ['./build/dev-client', config.entry.app]
config.output.publicPath = '/'

config.plugins = (config.plugins || []).concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: page.template,
    inject: true,
    dev: true
  })
])

module.exports = config
