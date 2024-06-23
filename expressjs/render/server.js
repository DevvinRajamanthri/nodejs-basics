const express = require("express");
const app = express();
const port = 3000;
let fs = require("fs")
app.get("/", function (req, res) {
    fs.readFile('./public/index.html',(err, data) => {
        res.end();
    });
});

app.listen(port);