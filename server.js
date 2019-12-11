var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);

users = [];
connections = [];
//basic server
server.listen(process.env.PORT || 3000);

console.log('Server Running....');
app.get('/', function(req,res){
        res.sendFile(__dirname + '/index.html');
}); 
//Open connection with Socket IO

  
io.sockets.on('connection', function(socket){

        connections.push(socket);
        console.log('Server Connected with : %s Socckets', connections.length); 

        // //Disconnection about socket
        socket.on('disconnect', function(data){

                connections.splice(connections.indexOf(socket), 1);
                console.log(' Disconnected: %s sockets connected', connections.length); //if someone disconnect we can see available users
                

        });
});


