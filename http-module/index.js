var http = require('http');
//http is amoudle given by module
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  res.end();
}).listen(8080);