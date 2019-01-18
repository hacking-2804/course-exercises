require('dotenv').config({ path: require('find-config')('.env') })
var initListeners = true;

/*

    The code for sending and receiving data from our micro process

*/

var internalIO = require('socket.io-client');
console.log(`${process.env.DATA_SERVER_BASE}:${process.env.DATA_SERVER_PORT}`);
let internalSocket = internalIO.connect(`${process.env.DATA_SERVER_BASE}:${process.env.DATA_SERVER_PORT}`, {
    reconnection: true
});
internalSocket.on('connect', function(){
    console.log("DATA CONFIG :: CONNECTED TO THE SERVER");

    if(initListeners){
        initListeners = false;

        internalSocket.on('exercises', function(msg){
            console.log("OUT :: RECEIVED 1 JOB");
        });
    }

    internalSocket.emit('getExercises', { 
        data: {
            category: "",
            keyword: "",
            application: "",
            difficulty: "",
        }
    });
});