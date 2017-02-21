var config = require('./webpack.config.js')

config.entry = {
  'fishbone-ui': './src/index.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'fishboneUi',
  libraryTarget: 'umd'
}


module.exports = config
