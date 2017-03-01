var app = require('express')();
var express = require('express');
var http = require('http').Server(app);

app.use(express.static('./public'));
/* Specifying the public folder to place the static html and javascripts */

//http.createServer(app).listen(3000);

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html')
});
app.get('/novel',function(req,res){
	res.sendFile(__dirname + '/public/pages/novel.html')
});
app.get('/tutorial',function(req,res){
	res.sendFile(__dirname + '/public/pages/tutorial.html')
});
app.get('/characters',function(req,res){
	res.sendFile(__dirname + '/public/pages/characters.html')
});
app.get('/music',function(req,res){
	res.sendFile(__dirname + '/public/pages/music.html')
});
app.get('/FanArt',function(req,res){
	res.sendFile(__dirname + '/public/pages/FanArt.html')
});
app.get('/Chat-RPG',function(req,res){
	res.sendFile(__dirname + '/public/pages/Chat-RPG.html')
});

http.listen(3000, function(){
	console.log("server rodando em porta 3000");
});