var http = require('http');
var fs = require('fs');

var path = require('path');

http.createServer(function(req, res) {
    let filePath = (req.url == '/') ? '/index.html' : req.url;

    res.writeHead(200);
    
    fs.createReadStream(path.join(__dirname, filePath)).pipe(res);
    
    // if(req.url === '/') {
    //     filePath = fs.createReadStream(__dirname + '/flowershop/index.html').pipe(res);
       
    // }        

}).listen(5000, '127.0.0.1');
