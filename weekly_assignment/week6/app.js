//Dependencies for the application
require('dotenv').config();
const NODE_ENV = process.env.NODE_ENV || 'development'
const port = process.env.PORT;
const path = require('path');
const basicAuth = require('express-basic-auth');

const NoteService = require('./NoteService');
const NoteRouter = require('./NoteRouter');

const {app} = require('./utils/init-app')();

app.use(basicAuth({
    users:{
        'admin': 'password',
        'Alex': 'man123',
        'Emily': 'woman246'
    }
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