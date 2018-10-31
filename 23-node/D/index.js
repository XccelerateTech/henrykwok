var express = require ('express');
var bodyParser = require('body-parser');

var app = express ();



app.use(bodyParser.urlencoded({extended: true}))

app.post('/', function(req, res) {
    var arr = [1,2,3,4];
    var newarr = arr.reduce(function(acc, value){
        return acc + value;
    });
    console.log(newarr);
    res.send(newarr);
})

app.listen(3000);