var app = require('express')();
var express = require('express');
var http = require('http').Server(app);

//app.use(express.static('./public'));
/* Specifying the public folder to place the static html and javascripts */

//http.createServer(app).listen(3000);

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html')
});

http.listen(3000, function(){
	console.log("server rodando em porta 3000");
});