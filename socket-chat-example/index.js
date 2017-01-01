var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function (req, res) {
  res.sendfile('index.html')
})

io.on('connection', function (socket) {
  socket.broadcast.emit('user:login', 'someone login')

  socket.on('chat message', function (msg) {
    io.emit('chat message', msg)
  })

  socket.on('disconnect', function () {
    io.emit('user:logout', 'someone logout')
  })
})

http.listen(3000, function () {
  console.log('listening on *:3000')
})
