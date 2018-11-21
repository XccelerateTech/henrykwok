const express = require('express');
const app = express();
//express-session allows us to keep user sessions
const session = require('express-session');
const setupPassport = require('./passport');
const bodyParser = require('body-parser');
const router = require('./router')(express);

app.use(session({
    secret: 'supersecret'
}));

app.use(bodyParser());

setupPassport(app);

app.use('/', router);

app.listen(3030, function(){
    console.log('listening on port 3030');
});