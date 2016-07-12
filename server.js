var express = require('express'); //require the express module
var app = express(); //alows us to use express methods
var mongojs = require('mongojs');
var db = mongojs('addressList', ['addressList']); //db and collection

app.use(express.static(__dirname + '/public')) //place html (static file) inside this directory
app.get('/addressList', function(req, res){
  console.log("server received GET request from controller");
  db.addressList.find(function(err, docs){
    console.log(docs);
    res.json(docs); //send data to controller
  })
});
app.listen(3000);
console.log("port 3000");