var http = require('http');
const PORT= (process.env.PORT || 3000);
import express from 'express';
const app = express();
var server = require('http').createServer(app);


server.listen(PORT, () => {
    console.log(`Api listening on port ${PORT}!`);
  });const app = express();
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Frist App!');
//     console.log("Port==>",PORT);
    
// }).listen(PORT);