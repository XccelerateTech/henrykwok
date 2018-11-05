const promisefs = require('./promiseFs');
const checkFile = require ('./promiseFs');
const readFile = require ('./promiseFs');
const pathModule = require ('path');

function traverseFolder (path) {
    promisefs.readdir(path).then((files) => {
        for (let file of files) {
            const filePath = pathModule.join(path, file);
            outputFolderContent(filePath);
        }
    }).catch((error) => {
        console.log(error);
    });
}

function outputFolderContent(filePath) {
   promisefs.stats(filePath).then((stats) => {
       if(stats.isDirectory()) {
           console.log(filePath + ' is a directory.')
           traverseFolder(filePath);
       } else {
           console.log(filePath + " is a file.")
       }
   }).catch((error) => {
       console.log(error);
   });
}

traverseFolder('./files/files/..');