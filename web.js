var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.sendfile("index.html");
});

app.get('/:doc', function(request, response) {
  response.sendfile(request.params.doc);
});

app.get('/css/:doc',function(request, response) {
  response.sendfile('css/' + request.params.doc);
});

app.get('/scripts/:doc',function(request, response) {
  response.sendfile('scripts/' + request.params.doc);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
