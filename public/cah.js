// Socket connection is up on client side
var socket = io.connect('http://localhost:8080');

// Client receives welcome message from sevrer
socket.on('message', function(message) {
    alert('Le serveur a un message pour vous : ' + message.content);
})

// Query DOM
var createNewGameBtn =  document.getElementById('createNewGame'),
    joinGameBtn =       document.getElementById('joinGame');
