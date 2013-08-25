var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = fs.readFileSync('index.html');
  response.send(buffer.toString('utf-8'));
});

app.get('/css/:doc',function(request, response) {
  var buffer = fs.readFileSync('css/' + request.params.doc);
  response.send(buffer.toString('utf-8'));
});

app.get('/scripts/:doc',function(request, response) {
  var buffer = fs.readFileSync('scripts/' + request.params.doc);
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
