//Add dependencies
const express = require ('express');
const fs = require ('fs');
const multer = require ('multer');
const fileUpload = require ('express-fileupload');
const bodyParser = require ('body-parser');
const path = require ('path');

const app = express();
const upload = multer();

//define an array for cache 
let cache = {};

app.use(bodyParser.urlencoded({extended: false}))
app.use(fileUpload());

/* function readFile (filePath) {
    return new Promise ((resolve, reject) => {
        fs.readdir(filePath, (err, files) => {
            if(err) {
                reject(err);
            } else {
                resolve(files);
            }
        })
    })
} */

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/files', upload.single('file-to-upload'), (req, res) => {
    if(Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let fileUploaded = req.files.fileUploaded;

    fileUploaded.mv('/files', function(err) {
        if (err)
            return res.status(500).send(err);
        res.send("File uploaded");
    })
    console.log(req.files);
    
});

app.listen(3000);