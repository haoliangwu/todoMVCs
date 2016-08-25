const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname + '/src',
  entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './index.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  externals: {
    angular: 'angular'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src')
      },
      { test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

}