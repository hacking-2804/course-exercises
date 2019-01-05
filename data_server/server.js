require('dotenv').config({ path: require('find-config')('.env') })

/*

    Manages and communicates with the web servers
    Handles receiving traffic from the web servers
    Send traffic is routed through serverSocket.js

*/
console.log(`DATA SERVER :: SERVER PORT = ${process.env.DATA_SERVER_PORT}`);
var io = require('socket.io')(process.env.DATA_SERVER_PORT);

io.on('connection', function(socket){
    console.log('A USER CONNECTED');

    socket.on('getExercises', function(msg){
        console.log("DATA SERVER :: GETTING THE EXERCISE...");
        msg = receiveMsg(msg);
        console.log("DATA SERVER :: THE SOCKET DATA IS...");
        console.log(msg);

        socket.emit('exercises')
    });
});

function receiveMsg(message){
    return message.data;
}