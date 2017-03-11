const page = require('../config')

module.exports = {
  postcss: [require('autoprefixer')({ browsers: page.browsers })],
  loaders: {
    scss: 'vue-style-loader!css-loader!sass-loader'
  }
}
