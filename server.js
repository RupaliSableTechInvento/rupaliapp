var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(app.set('port', process.env.PORT || 8080), function () {
  console.log('Example app listening on port 3000!');
});