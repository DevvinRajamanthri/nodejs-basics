let express = require("express");
let app = express();
let port = 3000;
let fs = require("fs");
app.get("/", function(req, res){
  res.send("hello");
});
app.listen(8080);