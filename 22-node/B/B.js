var fs = require ('fs');

var readable = fs.createReadStream(__dirname + '/text.txt', {encoding: 'utf-8', highWaterMark: 32*1024});
var writable = fs.createWriteStream(__dirname + '/textcopy.txt');

readable.pipe(writable);