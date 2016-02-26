var server = require('http').Server();
var nsps = [];
var io = require('socket.io')(server);
	  io.on('connection', function(socket){
		console.log("ktos sie polączyl");

	  socket.on('disconnect', function(data){
		  console.log("rozlączono");
	  });
	  socket.on('create_room', function(){
		var tmp = g_room();
		nsps.push(tmp);
		socket.emit('created', {'code':tmp});
		socket.join(tmp);
	  });
	  socket.on('enter_room', function(data){
		  if(check_room(data.code)){
			socket.emit('joined', {'code':data.code});
			socket.join(data.code);
			
		  } else {
			  socket.emit('noroom', {'noroom':data.code});
		  }
		 
	  });
	  socket.on('echo', function(data){
		 socket.broadcast.to(data.room).emit('echo', data);
	  });
	  socket.on('get_data', function(data){
	  	socket.broadcast.to(data.room).emit('get_data',data);
	  });
	  socket.on('send_data', function(data){
	  	socket.to(data.room).emit('send_data',data);
	  });
	  socket.on('text', function(data){
		 socket.broadcast.to(data.room).emit('text', data);
	  });
	  socket.on('c_move',function(data){
	  	socket.broadcast.to(data.room).emit('c_move', data);
	  });

});

function g_room(){
	var room = "";
	var pos = "abcdefghijklmnoprstuwxyz";
	for( var i=0; i < 5; i++ ){
		room += pos.charAt(Math.floor(Math.random() * pos.length));
	}
	if(nsps.indexOf(room)==-1){
		return room;
	} else {
		console.log("znaleziono takie samo shit");
		return g_room();
	}
}

function check_room(a){
	if(nsps.indexOf(a)==-1){
		return false;
	} else {
		return true;
	}
}
server.listen(8000);

