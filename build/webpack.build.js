var config = require('./webpack.config.js')

config.entry = {
  'fishbone-ui': './src/index.js',
}

config.output = {
  filename: './dist/index.js'
}


module.exports = config
