var http = require('http');
var dt = require('./module'); 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(dt.hello());
  res.write(dt.bye());
  res.end();
}).listen(8080);