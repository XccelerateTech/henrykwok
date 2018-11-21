const passport = require('passport');

module.exports = (express) => {
    const router = express.Router();

    //test whether a user is logged in or not
    function isLoggedIn(req, res, next) {
        //isAuthenticated is influenced by passport.js. When returns true, passport.js successfully authenticated a user.
        if(req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    }

    //hits the route "/secret" to check whether he is logged in or not.
    router.get('/secret', isLoggedIn, (req, res) => {
        res.send('Here you go, a secret');
    });

    //"/.login" renders a simple login form
    router.get('/login', (req, res) => {
        res.sendFile(__dirname + '/login.html');
    });

    //handle the login request from the user
    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/error'
    }));

    router.get('/error', (req, res) => {
        res.send('You are not logged in!');
    });

    router.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });

    return router;
};