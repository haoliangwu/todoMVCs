var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function (req, res) {
  res.sendfile('index.html')
})

io.on('connection', function (socket) {
  socket.on('user:login', function (user) {
    socket.broadcast.emit('user:login', `${user} login`)
  })

  socket.on('chat message', function (msg, opts) {
    const _msg = `${opts.user}: ${msg}`

    socket.broadcast.emit('chat message', _msg)
  })

  socket.on('user:logout', function (user) {
    socket.broadcast.emit('user:logout', `${user} logout`)
  })

  socket.on('user:typing', function (user) {
    socket.broadcast.emit('user:typing', `${user} is typing`)
  })
})

http.listen(3000, function () {
  console.log('listening on *:3000')
})
