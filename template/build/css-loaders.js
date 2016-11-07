const ExtractTextPlugin = require('extract-text-webpack-plugin')
const page = require('../config')

module.exports = function (options) {
  // generate loader string to be used with extract text plugin
  function generateLoaders (loaders) {
    var sourceLoader = loaders.map(function (loader) {
      var extraParamChar
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?')
        extraParamChar = '&'
      } else {
        loader = loader + '-loader'
        extraParamChar = '?'
      }
      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
    }).join('!')
    
    if (options.extract) {
      // override publicPath
      return ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: sourceLoader,
        publicPath: page.absolutePath ? undefined : './'
      })
    } else {
      return ['style-loader', sourceLoader].join('!')
    }
  }
  
  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return [
    {
      key: 'css',
      value: generateLoaders(['css', 'postcss'])
    },
    {
      key: 'less',
      value: generateLoaders(['css', 'postcss', 'less'])
    },
    {
      key: 'sass',
      value: generateLoaders(['css', 'postcss', 'sass'])
    },
    {
      key: 'scss',
      value: generateLoaders(['css', 'postcss', 'sass'])
    },
    {
      key: 'stylus',
      value: generateLoaders(['css', 'postcss', 'stylus'])
    },
    {
      key: 'styl',
      value: generateLoaders(['css', 'postcss', 'stylus'])
    }
  ]
}
