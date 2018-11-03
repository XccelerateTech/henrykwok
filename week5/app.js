const express = require ('express');
const fs = require ('fs');
const multer = require ('multer');
const fileUpload = require ('express-fileupload');
const bodyParser = require ('body-parser');
const path = require ('path');

const app = express();

let cache = [];

app.use(bodyParser.urlencoded({extended: false}))
app.use(fileUpload());

function readFile (filePath) {
    return new Promise ((resolve, reject) => {
        fs.readdir(filePath, (err, files) => {
            if(err) {
                reject(err);
            } else {
                resolve(files);
            }
        })
    })
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/files', (req, res) => {
    console.log(req.body);
    res.send("File uploaded")
});

app.listen(3000);