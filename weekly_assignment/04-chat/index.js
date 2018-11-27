//require necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const https = require('https');
const fs = require('fs');
require('dotenv').config()

//require and set up passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//unpack express and use body parser
const app = express();

const redis = require('redis');
const RedisStore = require('connect-redis')(expressSession);
const socketIOSession = require("socket.io.session");

const redisClient = redis.createClient({
    host: 'localhost',
    port: 6379,
    auth_pass: 'mypass1'
});

const users = [
    {
        id: 0,
        email: 'tom@tom.com',
        password: 'tom123'
    },{
        id: 1,
        email: 'peter@peter.com',
        password: 'pass123'
    }
]

const sessionStore = new RedisStore({
    client: redisClient,
    unset: "destroy"
});

const settings = {
    store: sessionStore,
    secret: "supersecret",
    cookie: { "path": '/', "httpOnly": true, "secure": false, "maxAge": null}
}

app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession(settings));

app.use(passport.initialize());
app.use(passport.session());

passport.use('local-login', new LocalStrategy(
    async(email, password, done) => {
        try {
            let users = await users.filter(users => users.email === email);
            if(users.length == 0) {
                return done(null, false, { message: 'Incorrect credentials.'});
            }
            let user = users[0];
            if (user.password == password){
                return done(null, user);
            } else {
                return done (null, false, {message: 'Incorrect credentials.'});
            }
        } catch (err) {
            return done(err);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, users.id);
});

const deserializeUser = ((id, done) => {
    let userResult = users.filter(user => user.id === id)
    if(userResult.length == 0){
        return done (new Error(`Wrong user id ${id}`));
    }
    let user = userResult[0];
    return done(null, user);
});

passport.deserializeUser(deserializeUser)

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

app.get('/', isLoggedIn, (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/error', (req, res)=>{
    res.send('You are a failure.');
})

// app.get('/auth/facebook', passport.authenticate('facebook', {
//     scope: ['user_friends', 'manage_pages']
// }));

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/error'
}));

const options = {
    cert: fs.readFileSync('./localhost.crt'),
    key: fs.readFileSync('./localhost.key')
};

const server = https.createServer(options, app);

const io = require('socket.io')(server);
io.use(socketIOSession(settings).parser);

io.use((socket, next) => {
    if(!socket.session.passport){
        socket.disconnect();
    } else {
        deserializeUser(socket.session.passport.user, (err, user) => {
            socket.user = user;
            next();
        })
    }
    
});

io.on('connection', function(socket){
    socket.on('disconnect', () => console.log(socket.user.email + 'has left us.'));
        console.log(socket.user.email + 'has joinged our room.')
        socket.on('chat message', function(msg){
            console.log(socket.user.email + 'message: ' + msg);
            io.emit('chat message', socket.user.email + ' : '+ msg);
        });
});

server.listen(3000);
