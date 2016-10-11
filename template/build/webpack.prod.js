var webpack = require('webpack')
var config = require('./webpack.base.js')
var cssLoaders = require('./css-loaders')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var page = require('../config')
var rimraf = require('rimraf')
var path = require('path')

config.output.filename = '[name].[chunkhash:8].js'
config.output.chunkFilename = '[id].[chunkhash:8].js'
config.devtool = page.sourceMap ? 'source-map' : false

cssLoaders({ sourceMap: false , extract: page.extractCss }).forEach(function (loader) {
  config.vue.loaders[loader.key] = loader.value
})

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' }}),
  new ExtractTextPlugin('[name].[contenthash:8].css'),
  new webpack.optimize.OccurenceOrderPlugin(),
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
