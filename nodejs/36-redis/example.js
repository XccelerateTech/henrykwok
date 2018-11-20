'use strict';

var redis = require('redis');
var client = redis.createClient();

client.auth('mypass1');

client.on('error', function (err) {
    console.log('error event - ' + client.host + ':' + client.port + ' - ' + err);
});


// Strings

// client.set('my string', 'this is a string', redis.print);
// client.get('my string', function(err, result) {
//   console.log(result); // this is a string
// });

// //sets

/* client.sadd(['tags', 'angularjs', 'backbonejs', 'emberjs'], function(err, reply) {
    console.log(reply); // 3
});

client.smembers('tags', function(err, reply) {
    console.log(reply);
}); */

//hashes 

/* client.hset('HSET record', 'key', 'value', redis.print);
client.hset('HSET record', 'second key', 'second value', redis.print);
client.hmset('HSET record', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express');
client.hgetall('HSET record', function(err, result) {
  console.log(JSON.stringify(result)); // {"key":"value","second key":"second value"}
}); */

// //Lists

// client.rpush(['frameworks', 'angularjs', 'backbone'], function(err, reply) {
//     console.log(reply); //prints 2
// });

// client.lrange('frameworks', 0, -1, function(err, reply) {
//     console.log(reply); // ['angularjs', 'backbone']
// });



// // Other examples
client.set('string key', 'string val', redis.print);
client.hset('hash key', 'hashtest 1', 'some value', redis.print);
client.hset(['hash key', 'hashtest 2', 'some other value'], redis.print);
client.hkeys('hash key', function (err, replies) {
    if (err) {
        return console.error('error response - ' + err);
    }

    console.log(replies.length + ' replies:');
    replies.forEach(function (reply, i) {
        console.log('    ' + i + ': ' + reply);
    });
});

client.quit(function (err, res) {
    console.log('Exiting from quit command.');
});