var http = require('http');
var dt = require('./hello-world-module');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(dt.helloworld());
  res.end();
}).listen(8080);