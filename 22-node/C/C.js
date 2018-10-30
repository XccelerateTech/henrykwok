var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/flower_shop.html').pipe(res);
    }else if(req.url === '/assets/img/flower-icon.png') {
        fs.createReadStream(__dirname + '/assets/img/flower-icon.png').pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    }

});

server.listen(3000, '127.0.0.1');
console.log('server is hoisted')