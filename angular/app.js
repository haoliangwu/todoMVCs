'use strict'

var path = require('path')
var express = require('express')
var webpack = require('webpack')
var Dashboard = require('webpack-dashboard')
var DashboardPlugin = require('webpack-dashboard/plugin')

var config = require('./webpack.config.dev.js')

var app = express()
var compiler = webpack(config)
var dashboard = new Dashboard()

compiler.apply(new DashboardPlugin(dashboard.setData))

app.use(require('webpack-dev-middleware')(compiler, {
  // noInfo: true,
  quiet: true,
  publicPath: '/'
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.listen(3001, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:3000')
})
