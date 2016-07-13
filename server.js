
var port = process.env.PORT || 3000;
var express = require('express'); //require the express module
var app = express(); //alows us to use express methods
var mongojs = require('mongojs');
var db = mongojs('addressList', ['addressList']); //db and collection
var parseBody = require('body-parser');

app.use(express.static(__dirname + '/public')) //place html (static file) inside this directory
app.use(parseBody.json());
app.get('/addressList', function(req, res){
  console.log("server received GET request from controller");
  db.addressList.find(function(err, docs){
    console.log(docs);
    res.json(docs); //send data to controller
  })
});

app.post('/addressList', function(req, res){ //listen for POST request from controller
  console.log(req.body);
  db.addressList.insert(req.body, function(err, entry){ //insert data into db
    res.json(entry); //send data back to controller
  })
});

app.delete('/addressList/:id', function(req, res){
  var id = req.params.id //get the value of the id from url
  console.log("id coming from server.js: " + id);
  db.addressList.remove({_id: mongojs.ObjectId(id)}, function(err, entry){
    res.json(entry);
  });
});

app.get('/addressList/:id', function(req, res){
  var id = req.params.id //get the value of the id from url
  console.log("id coming from server.js: " + id);
  //find one specific person from db
  db.addressList.findOne({_id: mongojs.ObjectId(id)}, function(err, entry){
    res.json(entry);
  })
})

app.put('/addressList/:id', function(req, res){
  var id = req.params.id;
  console.log(req.body.name);
  db.addressList.findAndModify({query: {_id: mongojs.ObjectId(id)}, //contact that will be modified
    update: {$set: {name: req.body.name, phoneNum: req.body.phoneNum, email: req.body.email, facebook: req.body.facebook}},
    new: true}, function(err, entry){
      res.json(entry);
    });
});

app.listen(port);
console.log(port);