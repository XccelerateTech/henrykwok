//Dependencies for the application
require('dotenv').config();
const NODE_ENV = process.env.NODE_ENV || 'development'
const port = process.env.PORT;
const express = require('express');
const hb = require('express-handlebars');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');

let app = express();    

const AuthChallenger= require('./AuthChallenger');
const NoteService = require('./NoteService');
const NoteRouter = require('./NoteRouter');



const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

app.engine('handlebars', hb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(basicAuth({
    challenge: true,
    authorizer: new AuthChallenger(knex),
    authorizeAsync: true    
}));

let note1 = new NoteService(knex);

app.get('/', (req, res) => {
    note1.listNote(req.auth.user).then((rows) => {
        res.render('index', {
            user: req.auth.user,
            notes: rows.notes_content
        });
    });    
});

app.use('/api/notes/', (new NoteRouter(note1)).router());
   
app.listen(port,() => {
    console.log(`Application started ar port:${port}`);
});