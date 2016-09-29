const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  context: __dirname + '/src',
  entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './index.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  externals: {
    angular: 'angular',
    'angular-ui-router': 'angular-ui-router'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src')
      },
      { test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      { test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'LifeCycle DEMO',
      inject: false,
      template: 'index.html'
    })
  ]

}
