$(document).ready(function(){
	var socket = io.connect('http://localhost:8000');
	var room="";
	//status
	var stat;
	var r_num;
	var waitin = true;
	// coursors
	var coursors = [];
	//ile osob w pokoju
	var free_slots = [0,1,2,3,4];
	var roomies = [];
	// keys
	var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var number = ['0','1','2','3','4','5','6','7','8','9'];
	var sign = [' '];
	// svg
	var s = Snap('#kartka');
	var colors = ['#ff43a4','#50b7fc','#56ff56','#ffc14a','#ff4a4a'];
	var objects = [];
	var nr_object = 0;
	var mx;
	var my;
	var offset;
	// brak pokoju ktory został wpisany
	socket.on('noroom', function(data){
		$('#enter_room').append("Nie znaleziono pokoju o kodzie: "+data.noroom+"</br> Spróbuj ponownie.");
	});
	// interfejs jquery
	$('#create').click(function(){
		socket.emit('create_room');
		$('#start').hide("slide", {direction:"left"},500);
		$('#room').show("slide", {direction:"left"},500, function(){
			offset = $('#kartka').offset();
		});
		

	});
	$('#join').click(function(){
		$('#enter_room').show("slide", {direction:"down"},500);
		
	});
	$('#enter').on('click', function(){
		var pokoj = $('#pokoj').val();
		socket.emit('enter_room', {'code': pokoj});
	});

	// koniec interfejsu


	//gdy ktos nowy sie polaczy
	socket.on('joined', function(data){
		room = data.code;
		stat = 'guest';
		socket.emit('get_data', {'room':room});
	});
	socket.on('get_data', function(data){
		if(stat=='host'){
			if(free_slots.length==0){
				//wyslij blad, pokoj pelny
			} else {
				roomies.push(free_slots[0]);
				free_slots.splice(0,1);
				console.log(roomies.length);
				var roomie_id = roomies[roomies.length-1];
				coursors[roomie_id] = s.circle(0,0,10);
				coursors[roomie_id].attr({
					fill:colors[roomie_id]
				});
				socket.emit('send_data', {'objects':objects,'nr_object':nr_object,'coursors':coursors,'roomies':roomies,'free_slots':free_slots,'roomie_id':roomie_id,'room':room});
			}
			
		}
	});
	socket.on('send_data', function(data){
		if(waitin){		
			for(var i = 0; i<data.objects.length; i++){
				disp_obj(data.objects[i],i);
			}
			for(var i = 0; i<data.coursors.length; i++){
				disp_cour(data.coursors[i],i);
			}
			roomies=data.roomies;
			free_slots = data.free_slots;
			nr_object=data.nr_object;
		
			r_num=data.roomie_id;
			console.log("twoj id to: "+r_num);
			$('#start').hide("slide", {direction:"left"},500);
			$('#room').show("slide", {direction:"left"},500, function(){
				offset = $('#kartka').offset();
			});
			console.log("połączono!!");
			waitin = false;
		} else {
			coursors[data.roomie_id] = s.circle(0,0,10);
			coursors[data.roomie_id].attr({
				fill: colors[data.roomie_id]
			});
		}

	});

	socket.on('created', function(data){
		room = data.code;
		stat = 'host';
		roomies.push(free_slots[0]);
		free_slots.splice(0,1);
		r_num=0;
		coursors[r_num]=s.circle(0,0,10);
		coursors[r_num].attr({
			fill:'#B8005A'
		});
		console.log("połączono: "+room);
		$('#room').append("</br>Twoj kod pokoju to: "+room);
		waitin = false;
	});
	
	
	
	//svg

	$(window).resize(function(){
		offset = $('#kartka').offset();
	});

	socket.on('text', function(data){
		nr_object=data.nr;
		objects[nr_object] = s.text(data.x,data.y,data.key);	
	});

	$('#kartka').on('mousemove', function(event){
		mx=event.pageX - offset.left;
		my=event.pageY - offset.top;	
		coursors[r_num].attr({
			cx:mx,
			cy:my
		});
		socket.emit('c_move', {'r_num':r_num,'x':mx,'y':my,'room':room});
	});
	socket.on('c_move', function(data){
		coursors[data.r_num].attr({
			cx:data.x,
			cy:data.y
		});
	});
	
	$('#kartka').on('click', function(){
		
	});
	$(document).on('keypress', function(event){
		if(room.length>3){
			var n = event.which;
			if(n<97 && n>=48){
				c_text(number[n-48],mx,my);
				var bb = objects[nr_object-1].getBBox();
				mx+=bb.width;
			} 
			if(n>=97) {
				c_text(letter[n-97],mx,my);
				var bb = objects[nr_object-1].getBBox();
				mx+=bb.width;
			}
			if(n==32){
				mx+=10;
			}
			console.log(event.which);
		}
	});
	
	

	function c_text(key, x, y){
		objects[nr_object] = s.text(x,y,key);
		socket.emit('text',{'nr':nr_object,'key':key,'x':x,'y':y,'room':room});
		nr_object++;
	}

	function disp_obj(obj,i){
		var type = obj.type;
		var x = obj.attr.x;
		var y = obj.attr.y;
		var val = obj.childNodes[0].attr.text;
		objects[i]=s.text(x,y,val);
	}
	function disp_cour(cur,i){
		var x = cur.attr.cx;
		var y = cur.attr.cy;
		var f = cur.attr.fill;
		var r = cur.attr.r;
		coursors[i]=s.circle(x,y,r);
		coursors[i].attr({
			fill:f
		});
	}
});

