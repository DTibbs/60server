var util = require("util");
var winston = require('winston');
var express = require('express');
var app = express();

//app.get('/', function(req, res){
//	res.send('Thanks!');
//});

// Set up a log file to log any POSTS
winston.add(winston.transports.File, { filename: 'sixty.log', json: false });

app.use(express.bodyParser());

app.post('/sixty:', function(req, res){
	console.log('got post of ' + req.body.comment);
	winston.log('info', req.body.comment);
	res.send('Thanks!');
})

var portNum = 6060
app.listen(portNum);
console.log('Listening on port ' + portNum);
