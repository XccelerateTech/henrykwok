const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

//Get the response by sending file 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//Broadcast the msg to every users
/* io.on('connection', (socket) => {
    console.log('a user connected to the socket');
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
}); */

// ============Namespace==============
/* const namespace1 = io.of('/namespace1');
namespace1.on('connection', (socket)=>{
    console.log(`Socket with id ${socket.id} connected!`);
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        namespace1.emit('chat message', msg);
    })
}); */

// ============Subscribe==============
io.on('connection', (socket) => {
    let chatroom = null;
    socket.on('subscribe', (room) => {
        chatroom = room;
        socket.join(room);
        console.log('a user has connected to the room' + room);    
    })

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.to(chatroom).emit('chat message', msg);
    });
});

//Host the server
http.listen(3030, function(){
    console.log("Hoisting on port 3030");
});



