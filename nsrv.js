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

var util = require("util");
var express = require('express');
var app = express();

//app.get('/', function(req, res){
//	res.send('Thanks!');
//});

app.use(express.bodyParser());

app.post('/', function(req, res){
	console.log('got post of ' + req.body.comment);//util.inspect(req, false, null));
	res.send('Thanks!');
})

var portNum = 6060
app.listen(portNum);
console.log('Listening on port ' + portNum);


//var server = http.createServer(function(req, res) {
//	req.setEncoding("utf8");
//	req.content = '';
//
//	paths[req.url.pathname].apply(this, [req, res]);
//}).listen(8080);