const ExtractTextPlugin = require('extract-text-webpack-plugin')
const page = require('../config')

module.exports = function (options) {
  // generate loader string to be used with extract text plugin
  function generateLoaders (loaders) {
    var sourceLoader = loaders.map(function (loader) {
      // webpack2 has bug on minify css autoprefixer
      // https://github.com/postcss/autoprefixer/issues/660#issuecomment-220808316
      if (process.env.NODE_ENV === 'production' && loader === 'css') {
        loader += '?-autoprefixer'
      }
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
        publicPath: './'
      })
    } else {
      return ['style-loader', sourceLoader].join('!')
    }
  }
  
  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return [
    {
      key: 'css',
      value: generateLoaders(['css'])
    },
    {
      key: 'less',
      value: generateLoaders(['css', 'less'])
    },
    {
      key: 'sass',
      value: generateLoaders(['css', 'sass?indentedSyntax'])
    },
    {
      key: 'scss',
      value: generateLoaders(['css', 'sass'])
    },
    {
      key: 'stylus',
      value: generateLoaders(['css', 'stylus'])
    },
    {
      key: 'styl',
      value: generateLoaders(['css', 'stylus'])
    }
  ]
}
