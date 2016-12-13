var express = require("express");

// Applications
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, function(){
  console.log('server is up on port: ' + port);
});
