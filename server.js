var express = require('express'); //require the express module
var app = express(); //alows us to use express methods

app.get('/', function(req, res){
  res.send("GET request received!");
})
app.listen(3000);
console.log("port 3000");