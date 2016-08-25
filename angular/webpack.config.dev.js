const path = require('path')

module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  externals: {
    angular: 'angular'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, include: path.resolve(__dirname, 'src'), loader: 'babel-loader' }
    ]
  }

}
