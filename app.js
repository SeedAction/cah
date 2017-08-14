var http = require('http');
var fs = require('fs');

// Send index.html uppon request
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Binding socket.io to the created server
var io = require('socket.io').listen(server);

// Client connection
io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');
    socket.emit('message', { content: 'Vous êtes bien connecté !', importance: '1' });
});


server.listen(8080);
