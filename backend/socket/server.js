var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);

io.on('connection',function(socket){
    console.log('a user connected');
    socket.on('client-newOrder',function(data){
        console.log(data);
        io.emit('server-newOrder',data);
    })
    socket.on('chat message',function(msg){
        io.emit('chat message',msg);
        console.log('message:'+msg);
    })
    socket.on('disconnect',function(){
        console.log('a user disconnected');
    })

})
http.listen(3000,function(){
    console.log('listen on',3000);
})