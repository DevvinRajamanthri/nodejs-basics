var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
 let txt = " ";
 if(req.url == "/home"){
    txt = "this is the home page"
    res.end(txt);
  }
  if(req.url == "/about"){
    txt = "this is changing the page depending on what the url is"
    res.end(txt);
  }
  
  res.end(txt);
}).listen(8080);