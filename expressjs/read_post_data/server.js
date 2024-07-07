let express = require("express");
let app = express();
let fs = require("fs");

app.use(express.urlencoded({ extended: true })); 

app.get("/", function(req, res){
    console.log("test");
    fs.readFile("sign_in.html", function(err, data){
        res.write(data);
        res.end();
    });
});

app.post('/submit', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    console.log('Username:', username);
    console.log('Password:', password);
  
    // Perform further actions with the input data
  
    res.send('Form submitted successfully!');
  });
  
      
    
app.listen(8080);