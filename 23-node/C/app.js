var express = require('express');
var app = express ();

app.get('/', function(req, res){
    res.send('hello world');
});

app.post('/login', function(req, res) {
    console.log(req.path);
    res.send('post received');
});

app.listen(5000);