var express = require('express'); //require the express module
var app = express(); //alows us to use express methods

app.use(express.static(__dirname + '/public')) //place html (static file) inside this directory

app.listen(3000);
console.log("port 3000");