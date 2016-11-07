const path = require('path')
const webpack = require('webpack')
const page = require('../config')
const vueConfig = require('./vue-loader.config')

process.env.BROWSERSLIST = page.browsers

page.entry = { app: './src/view/' + page.pageName + '/main.js' }
page.template = './src/view/' + page.pageName + '/template.html'

module.exports = {
  entry: page.entry,
  output: {
    path: path.resolve(__dirname, '../dist/'+ page.pageName +'/static'),
    publicPath: page.absolutePath ? page.absolutePath + page.pageName + '/static/' : './static/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue',
        options: vueConfig
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
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  plugins: []
}

if (page.useVendor) {
  module.exports.plugins.push(new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: require('../manifest.json')
  }))
}