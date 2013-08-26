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

// TODO: fix that code
app.get('/tests/:doc',function(request, response) {
  response.sendfile('tests/' + request.params.doc);
});

app.get('/tests/lib/:doc',function(request, response) {
  response.sendfile('tests/lib/' + request.params.doc);
});

app.get('/tests/spec/:doc',function(request, response) {
  response.sendfile('tests/spec/' + request.params.doc);
});

app.get('/pics/:doc',function(request, response) {
  response.sendfile('pics/' + request.params.doc);
});

app.get('/tests/lib/jasmine-1.3.1/:doc',function(request, response) {
  response.sendfile('tests/lib/jasmine-1.3.1/' + request.params.doc);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
