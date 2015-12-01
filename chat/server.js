var express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', function (req, res) {
	console.log("serving default page");
	res.sendFile(__dirname + '/public/home.html');
})
io.sockets.on("connection",function(socket){

	console.log("new connection ");
	socket.on("send message",function(data){
		console.log("received new message"+ data);
		io.sockets.emit("new message",data);
	});
});