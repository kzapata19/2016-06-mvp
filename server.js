var express = require('express'); //require the express module
var app = express(); //alows us to use express methods

app.use(express.static(__dirname + '/public')) //place html (static file) inside this directory
app.get('/addressList', function(req, res){
  console.log("server received GET request from controller");

  entry1 = {
    name: "Dora la exploraDora",
    phoneNum: "(323) 555 -1234",
    email: "miEmail@gmail.com",
    facebook: "www.facebook.com/dora"
  };

  entry2 = {
    name: "Swiper",
    phoneNum: "(213) 555-6789",
    email: "mcSwipey@hotmail.com",
    facebook: "www.facebook.com/swipey"
  };
  var addressList = [entry1, entry2];
  res.json(addressList); //server should respond to GET request with the data
});
app.listen(3000);
console.log("port 3000");