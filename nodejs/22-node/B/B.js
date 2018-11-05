var fs = require ('fs');

let copy = function (path) {
    var readable = fs.createReadStream(__dirname + path, {encoding: 'utf-8', highWaterMark: 32*1024});
    var writable = fs.createWriteStream(__dirname + '/textcopy.txt');
    
    readable.pipe(writable);
}

copy('/text.txt');