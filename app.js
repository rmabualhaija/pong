var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(5000, function () {
  console.log('App listening on port 5000!');
});
