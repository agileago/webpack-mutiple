const webpack = require('webpack')
const path = require('path')
const vendors = require('./build-page').vendors

module.exports = {
  entry: {
    vendor: vendors
  },
  output: {
    path: path.join(__dirname, '../lib'),
    filename: '[name].common.js',
    library: '[name]_common'
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'build/manifest.json',
      name: '[name]_common',
      context: __dirname
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = module.exports.plugins.concat([
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
  ])
}