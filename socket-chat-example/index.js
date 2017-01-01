var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function (req, res) {
  res.sendfile('index.html')
})

io.on('connection', function (socket) {
  socket.on('user:login', function (msg) {
    socket.broadcast.emit('user:login', `${msg} login`)
  })

  socket.on('chat message', function (msg, opts) {
    const _msg = `${opts.user}: ${msg}`

    io.emit('chat message', _msg)
  })

  socket.on('disconnect', function () {
    io.emit('user:logout', 'someone logout')
  })
})

http.listen(3000, function () {
  console.log('listening on *:3000')
})
