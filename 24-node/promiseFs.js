const fs = require ('fs');

module.exports.stats /* let checkFile */ = function (path) {
    return new Promise ((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if(err) {
                reject (err);
            } else {
                resolve (stats);
            }
        });
    });
};

// module.exports.stats = checkFile;

module.exports.readdir /* let readFile */ = function (path) {
    return new Promise ((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if(err) {
                reject (err);
            } else {
                resolve(files);
            }
        });
    });
};



// module.exports.readdir = readFile;