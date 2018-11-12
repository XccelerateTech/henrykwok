//Dependencies for the application
require('dotenv').config();
const NODE_ENV = process.env.NODE_ENV || 'development'
const port = process.env.PORT;
const path = require('path');
const basicAuth = require('express-basic-auth');

const NoteService = require('./NoteService');
const NoteRouter = require('./NoteRouter');

const {app} = require('./utils/init-app')();

const Users = [
    {
        username: 'admin',
        password: 'password'
    },
    {
        username: 'man',
        password: 'man123'
    }    
]

let myAuthFunc = (username, password) => {
    return Users.some((user) => {
        return user.username == username && user.password == password
    })
}

app.use(basicAuth({
    authorizer: myAuthFunc,
    challenge: true
}));

let note1 = new NoteService(path.join(__dirname, '/stores/notes.json'));

app.get('/', (req, res) => {
    note1.listNote(req.auth.user).then((notes) => {
        res.render('index', {
            user: req.auth.user,
            notes: notes
        });
    });    
});

app.use('/api/notes', (new NoteRouter(note1)).router());
   
app.listen(port,() => {
    console.log(`Application started ar port:${port}`);
});

/*app.get('/', function(req, res) {
    res.send(note1.listNote(res.body));
    console.log(res.body);
});

app.post('/addnote', function(req, res) {
    res.send(note1.addNote('1234563'));

});

app.delete('/deletenote', function(req, res){
    note1.deleteNote(0);
    console.log(res.body);
}) */