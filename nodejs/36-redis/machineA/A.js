const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');

const app = express();

let client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.auth('mypass1');

client.on('error', function(err) {
    console.log(err);
});

app.use(bodyParser.urlencoded({extended: false}));

app.post('/', function (req, res) {
    client.lpush('messageQueue', JSON.stringify({
        msg: req.body.msg,
        date: req.body.date
    })), (err) => {
        if(err) {
            console.log(err);
            res.json(err);
            return;
        }
        console.log(req.body.msg);
        console.log(`LPUSH a msg ${req.body.msg} dated on ${req.body.date}.`);

        res.join('ok!')
    }
})

app.listen(3000);
