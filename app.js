var express = require('express');
var app = express();
var socket = require('socket.io');

app.use(express.static('public'));


var server = app.listen(5000,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("server started on port 5000");
    }
});

//socket setup
var io = socket(server);
//connection event is listened here
io.on('connection', function(socket){
  console.log('a user connected');
  console.log(socket.id);

  socket.on('chat', function(msg){
  	io.sockets.emit('chat', msg);
  });
    

 /* socket.on('disconnect', function(){
    console.log('user disconnected');
  }); */
});