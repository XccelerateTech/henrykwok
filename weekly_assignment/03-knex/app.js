//Dependencies for the application
require('dotenv').config();
const NODE_ENV = process.env.NODE_ENV || 'development'
const port = process.env.PORT;
const basicAuth = require('express-basic-auth');

const {app} = require('./utils/init-app')();

const AuthChallenger= require('./AuthChallenger');
const NoteService = require('./NoteService');
const NoteRouter = require('./NoteRouter');

const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

app.use(basicAuth({
    challenge: true,
    authorizer: new AuthChallenger(knex),
    authorizeAsync: true    
}));

let note1 = new NoteService(knex);

app.get('/', (req, res) => {
    note1.listNote(req.auth.user).then((notes) => {
        res.render('index', {
            user: req.auth.user,
            notes: notes
        });
    });    
});

app.use('/api/notes/', (new NoteRouter(note1)).router());
   
app.listen(port,() => {
    console.log(`Application started ar port:${port}`);
});