const webpack = require('webpack')
const path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var page = require('../config')
var cssLoaders = require('./css-loaders')
var vueConfig = require('./vue-loader.config')

const postcss = [require('autoprefixer')({ browsers: page.browsers })]

module.exports = {
  entry: {
    vendor: page.vendor
  },
  output: {
    path: path.resolve(__dirname, '../lib/vendor'),
    filename: '[name].common.js',
    library: '[name]_common'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../manifest.json'),
      name: '[name]_common',
      context: __dirname
    }),
    new ExtractTextPlugin('[name].common.css'),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
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
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8000,
          name: '[name].[ext]?[hash:7]'
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!postcss-loader',
          publicPath: './'
        })
      },
      {
        test: /\.s(a|c)ss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!postcss-loader!sass-loader',
          publicPath: './'
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!postcss-loader!less-loader',
          publicPath: './'
        })
      }
    ]
  }
}

vueConfig.loaders = vueConfig.loaders || {}
cssLoaders({ sourceMap: false , extract: true }).forEach(function (loader) {
  vueConfig.loaders[loader.key] = loader.value
})