const fs = require('fs');
let newarr = [];

let readAll = function (path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            files.forEach(function(file) {
                fs.stat(path +'/', (err, stats) => {
                    console.log(file);
                    if (stats.isFile(file)) {
                        console.log(file + ' is a file')
                        resolve();
                    } else if (stats.isDirectory(file)) {
                        console.log(file + ' is a directory')
                        resolve();
                    } else {
                        reject(err);
                        
                    }
                });
            });
        });
    });
};

readAll('./files/..').then(function (file) {
    resolve(file);
}).catch(function (fromReject) {
    console.log('Your request is ' + fromReject)
});

