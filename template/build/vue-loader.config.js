const page = require('../config')

module.exports = {
  postcss: [require('autoprefixer')({ browsers: page.browsers })]
}
