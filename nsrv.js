/*
var util = require("util"),
    http = require('http'), 
     url = require('url'),
      qs = require('querystring');


// this is inside path which handles your HTTP POST method request
if(request.method === "POST") {
    var data = "";

    request.on("data", function(chunk) {
        data += chunk;
    });

    request.on("end", function() {
        util.log("raw: " + data);

        var json = qs.parse(data);

        util.log("json: " + json);
    });
}
*/

var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Thanks!');
});

app.post('/', function(req, res){
	console.log('got post of ' + req.sixty);
	res.send('Thanks!');
})

app.listen(3000);
console.log('Listening on port 3000');


//var server = http.createServer(function(req, res) {
//	req.setEncoding("utf8");
//	req.content = '';
//
//	paths[req.url.pathname].apply(this, [req, res]);
//}).listen(8080);