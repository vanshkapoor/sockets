//make connection

//var socket = io.connect('http://localhost:5000');
var socket = io();

//query
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');


//emit events
btn.addEventListener('click',function(){
	socket.emit('chat',{
		message:message.value,
		handle:handle.value
	});
})

//listen for events
socket.on('chat',function(data){
	output.innerHTML +='<p><strong>'+ data.handle +': </strong>'+ data.message+'</p>';

})