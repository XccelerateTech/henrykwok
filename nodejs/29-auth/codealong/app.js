const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

const USERS = [
{
    username: 'admin1',
    password: 'password1'
},
{
    username: 'admin2',
    password: 'password2'
}
]

let myAuthFunc = (username, password)=>{
    return USERS.some((user)=>{
        return user.username == username && user.password == password
    })
}

app.use(basicAuth({
    authorizer: myAuthFunc,
    challenge: true
}))

/* app.use(basicAuth({
    users: {'admin': 'password'},
    challenge: true   //without true, there will not be any windows prompted up.
})) */

app.get('/', (req, res)=>{
    res.send('Hello there Mr/Mrs Authenticated.')
});

app.listen(8080, ()=>{
    console.log('I am running on port 8080, please authenticate me.')
});