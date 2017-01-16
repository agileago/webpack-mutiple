const webpack = require('webpack')
const path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var page = require('../config')
var cssLoaders = require('./css-loaders')
var vueConfig = require('./vue-loader.config')

const postcss = [require('autoprefixer')({ browsers: page.browsers })]

const config = {
  entry: {
    vendor: page.vendor
  },
  output: {
    path: path.resolve(__dirname, '../lib/vendor'),
    filename: '[name].common.js',
    library: '[name]_common'
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../manifest.json'),
      name: '[name]_common',
      context: __dirname
    }),
    new ExtractTextPlugin('[name].common.css'),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        context: path.resolve(__dirname, '../'),
        postcss: [require('autoprefixer')({ browsers: page.browsers })]
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  }
}

// 注入cssloader
vueConfig.loaders = vueConfig.loaders || {}
cssLoaders({ sourceMap: false , extract: true }).forEach(function (loader) {
  vueConfig.loaders[loader.key] = loader.value
  config.module.rules.push({
    test: new RegExp('\\.' + loader.key + '$'),
    loader: loader.value
  })
})

module.exports = config