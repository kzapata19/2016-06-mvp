var http = require('http');
var port = 8080;

function reqHandler(req, res){
  res.end("Your request to: " + req.url + " made it through!");
}

var server = http.createServer(reqHandler);

server.listen(port, function(){
  console.log("This server is running on port 8080");
})