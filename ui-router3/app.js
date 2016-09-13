'use strict'

var path = require('path')
var express = require('express')
var webpack = require('webpack')
var Dashboard = require('webpack-dashboard')
var DashboardPlugin = require('webpack-dashboard/plugin')
var favicon = require('serve-favicon')

var config = require('./webpack.config.dev.js')

var app = express()
var compiler = webpack(config)
var dashboard = new Dashboard()

compiler.apply(new DashboardPlugin(dashboard.setData))

app.use(require('webpack-dev-middleware')(compiler, {
  quiet: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler, {
  log: () => {
  }
}))

app.use(favicon(path.join(__dirname, 'favicon.ico')))

app.use('/json', express.static('src/json'))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:3000')
})
