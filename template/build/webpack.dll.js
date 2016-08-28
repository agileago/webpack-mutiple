const webpack = require('webpack')
const path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var page = require('../config')
var cssLoaders = require('./css-loaders')

const postcss = [require('autoprefixer')({ browsers: page.browsers })]

module.exports = {
  entry: {
    vendor: page.vendors
  },
  output: {
    path: path.resolve(__dirname, '../lib/vendor'),
    filename: '[name].common.js',
    library: '[name]_common'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../manifest.json'),
      name: '[name]_common',
      context: __dirname
    }),
    new ExtractTextPlugin('[name].common.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 8000,
          name: '[name].[ext]?[hash:7]'
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?-autoprefixer!postcss',
          publicPath: './'
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?-autoprefixer!postcss!sass-loader',
          publicPath: './'
        })
      }
    ]
  },
  postcss,
  vue: {
    loaders: {},
    postcss,
  },
}

var config = module.exports

cssLoaders({ sourceMap: false , extract: true }).forEach(function (loader) {
  config.vue.loaders[loader.key] = loader.value
})