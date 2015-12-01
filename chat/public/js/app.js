var app=angular.module('chat', []);

app.controller('chatController', ['$scope', function($scope){
	$scope.welcomeMessage="Welcome to simple Chat application";
	$scope.messages=[];
	var socket=io.connect();
	socket.on("new message",function(data){
		console.log("new message received"+data);
		$scope.messages.push(data);
		$scope.$apply();
		console.log($scope.messages);

	});
	$scope.sendMessage=function(){
		console.log("new message "+$scope.newMessage);
		socket.emit("send message",$scope.newMessage);
		$scope.newMessage="";

	}
}]);