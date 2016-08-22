var webpack = require('webpack')
var config = require('./webpack.base.js')
var cssLoaders = require('./css-loaders')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var page = require('./build-page')

// eval-source-map is faster for development
// but it can't set breakpoint to debugger
config.devtool = 'source-map'

config.vue = config.vue || {}
config.vue.loaders = config.vue.loaders || {}
cssLoaders({ sourceMap: true, extract: false }).forEach(function (loader) {
  config.vue.loaders[loader.key] = loader.value
})

// add hot-reload related code to entry chunks
config.entry.app = ['webpack-hot-middleware/client?noInfo=true&reload=true', config.entry.app]

// necessary for the html plugin to work properly
// when serving the html from in-memory
config.output.publicPath = '/'

config.plugins = (config.plugins || []).concat([
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  // https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: page.template,
    inject: true,
    dev: true
  })
])

module.exports = config
