/****************************
* DEPENDANCIES
*****************************/
var express = require('express');
var socket = require('socket.io');

/****************************
* APP SETUP
*****************************/
var app = express();
var server = app.listen(8080, function(){
  console.log('Listening to requests on port 8080...');
});

/****************************
* STATIC FILES
*****************************/
app.use(express.static('public'));

/****************************
* SOCKET SETUP (SERVER SIDE)
*****************************/
var io = socket(server);
io.on('connection',function(socket){
  console.log('New client connected ; id = ' + socket.id);
});
