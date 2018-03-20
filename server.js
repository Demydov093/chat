var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/index.html');
});

io.on('connection', (socket) => {
   var user = Date.now();

   socket.on('message.send', function (message) {
      io.emit('message', user + ': ' + message)
   });
   io.emit('message', 'user ' + user +' connected');
});

http.listen(3000, () => {
    console.log('At 3000')
});