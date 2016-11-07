var webpack = require('webpack')
var config = require('./webpack.base.js')
var cssLoaders = require('./css-loaders')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var page = require('../config')
var rimraf = require('rimraf')
var path = require('path')
var vueConfig = require('./vue-loader.config')

config.output.filename = '[name].[chunkhash:8].js'
config.output.chunkFilename = '[id].[chunkhash:8].js'
config.devtool = page.sourceMap ? 'source-map' : false

vueConfig.loaders = vueConfig.loaders || {}
cssLoaders({ sourceMap: false , extract: page.extractCss }).forEach(function (loader) {
  if (page.extractCss) {
    vueConfig.loaders[loader.key] = loader.value
  }
  config.module.rules.push({
    test: new RegExp('\\.' + loader.key + '$'),
    loader: loader.value
  })
})

if (page.extractCss) {
  config.plugins.push(new ExtractTextPlugin('[name].[contenthash:8].css'))
}

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    options: {
      context: path.resolve(__dirname, '../'),
      postcss: [require('autoprefixer')({ browsers: page.browsers })]
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: page.sourceMap,
    compress: {
      warnings: false
    }
  }),
  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: page.template,
    inject: true,
    path: page.absolutePath ? page.absolutePath : '../',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    }
  })
])

rimraf.sync(path.resolve(__dirname, '../dist/' + page.pageName))

module.exports = config
