$(document).ready(function(){
	
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top-10, scrollLeft:target.offset().left-10
			}, 500);
			return false;
		  }
		}
	});
  
	$('#animate_start').delay(500).fadeIn();
	$('#first_dalej').delay(1000).fadeIn();
	var showerStatus = 0;
	var s = Snap("#svg");
	
	var nav_bar = Snap("#nav-button");
	var nav_top = nav_bar.line(0,2,25,2);
	var nav_mid = nav_bar.line(0,12,25,12);
	var nav_bot = nav_bar.line(0,23,25,23);
	var dotX = ($(window).width())/2;
	var dotY = ($(window).height())/2;
	nav_top.attr({
		strokeWidth:2,
		stroke: "#000",
		fill: "#000"
	});
	nav_mid.attr({
		strokeWidth:2,
		stroke: "#000",
		fill: "#000"
	});
	nav_bot.attr({
		strokeWidth:2,
		stroke: "#000",
		fill: "#000"
	});
	var nav_toggle = 0;
	$('#nav-button').click(function(){
		if(nav_toggle==0){
			nav_top.animate({
				y2: 23		
			},300);
			nav_mid.animate({
				stroke:'#fff',
				fill: '#fff',
				x2:0
			},300);
			nav_bot.animate({
				y2: 2
			},300);
			nav_toggle = 1;
		} else {
			nav_top.animate({
				y2: 2		
			},300);
			nav_mid.animate({
				stroke:'#000',
				fill: '#000',
				x2:25
			},300);
			nav_bot.animate({
				y2: 23
			},300);
			nav_toggle = 0;
		}
		
	});
	
	$('#dot').css({
		"top": dotY,
		"left": dotX
	});

	var svg_tlo1 = Snap("#tlo_anim1");
	var svg_tlo2 = Snap("#tlo_anim2");
	var svg_tlo3 = Snap("#tlo_anim3");
	var svg_tlo4 = Snap("#tlo_anim4");
	var svg_tlo5 = Snap("#tlo_anim5");
	var svg_tlo6 = Snap("#tlo_anim6");
	var svg_tlo7 = Snap("#tlo_anim7");
	var svg_tlo8 = Snap("#tlo_anim8");
	var svg_tlo9 = Snap("#tlo_anim9");
	var svg_tlo10 = Snap("#tlo_anim10");
	
	var rectw = 4;

	
	var svg_tlo_rect1 = svg_tlo1.rect(2,2,rectw,rectw);
	var svg_tlo_rect2 = svg_tlo2.rect(2,2,rectw,rectw);
	var svg_tlo_rect3 = svg_tlo3.rect(2,2,rectw,rectw);
	var svg_tlo_rect4 = svg_tlo4.rect(2,2,rectw,rectw);
	var svg_tlo_rect5 = svg_tlo5.rect(2,2,rectw,rectw);
	var svg_tlo_rect6 = svg_tlo6.rect(2,2,rectw,rectw);
	var svg_tlo_rect7 = svg_tlo7.rect(2,2,rectw,rectw);
	var svg_tlo_rect8 = svg_tlo8.rect(2,2,rectw,rectw);
	var svg_tlo_rect9 = svg_tlo9.rect(2,2,rectw,rectw);
	var svg_tlo_rect10 = svg_tlo10.rect(2,2,rectw,rectw);
	
	var tablica_tlo = [svg_tlo_rect1,svg_tlo_rect2,svg_tlo_rect3,svg_tlo_rect4,svg_tlo_rect5,svg_tlo_rect6,svg_tlo_rect7,svg_tlo_rect8,svg_tlo_rect9,svg_tlo_rect10];
	
	var svg_cursor1 = Snap("#cursor_anim1");
	var svg_cursor2 = Snap("#cursor_anim2");
	var svg_cursor3 = Snap("#cursor_anim3");
	var svg_cursor4 = Snap("#cursor_anim4");
	var svg_cursor5 = Snap("#cursor_anim5");
	var svg_cursor6 = Snap("#cursor_anim6");
	var svg_cursor7 = Snap("#cursor_anim7");
	var svg_cursor8 = Snap("#cursor_anim8");
	var svg_cursor9 = Snap("#cursor_anim9");
	var svg_cursor10 = Snap("#cursor_anim10");
	var svg_cursor11 = Snap("#cursor_anim11");
	var svg_cursor12 = Snap("#cursor_anim12");
	var svg_cursor13 = Snap("#cursor_anim13");
	var svg_cursor14 = Snap("#cursor_anim14");
	var svg_cursor15 = Snap("#cursor_anim15");
	var svg_cursor16 = Snap("#cursor_anim16");
	var svg_cursor17 = Snap("#cursor_anim17");
	var svg_cursor18 = Snap("#cursor_anim18");
	var svg_cursor19 = Snap("#cursor_anim19");
	var svg_cursor20 = Snap("#cursor_anim20");
	var xcord;
	var ycord;
	var xcord02;
	var ycord02;
	var zmienna =1 ;
	
	$(document).mousemove(function(event){
		if(wwidth>1200){
			xcord = event.pageX;
			ycord = event.pageY;
			xcord02 = ((event.pageX - $('#dot').offset().left)/40)*(-1);
			ycord02 = (event.pageY - $('#dot').offset().top)/50;

			$('#animate_start').css({
				"-webkit-transform": "rotateX("+ycord02+"deg) rotateY("+xcord02+"deg) translate("+(xcord02*(-1))*5+"px,"+ycord02*5+"px)",
				"transform": "rotateX("+ycord02+"deg) rotateY("+xcord02+"deg)  translate("+(xcord02*(-1))*5+"px,"+ycord02*5+"px)"
			});
			
			$('#tlo_anim1,#tlo_anim2,#tlo_anim3,#tlo_anim4,#tlo_anim5,#tlo_anim6,#tlo_anim7,#tlo_anim8,#tlo_anim9,#tlo_anim10').css({
				"-webkit-transform": "rotateX("+ycord02+"deg) rotateY("+xcord02+"deg) translate("+xcord02*5+"px,"+(ycord02*5)*(-1)+"px)",
				"transform": "rotateX("+ycord02+"deg) rotateY("+xcord02+"deg)  translate("+xcord02*5+"px,"+(ycord02*5)*(-1)+"px)"
			});
			var xpos = xcord/80;
			var ypos = ycord/80;
		}
	});
	var wrec = 2;
	var svg_cursor_rect1 = svg_cursor1.rect(2,2,wrec,wrec);
	var svg_cursor_rect2 = svg_cursor2.rect(2,2,wrec,wrec);
	var svg_cursor_rect3 = svg_cursor3.rect(2,2,wrec,wrec);
	var svg_cursor_rect4 = svg_cursor4.rect(2,2,wrec,wrec);
	var svg_cursor_rect5 = svg_cursor5.rect(2,2,wrec,wrec);
	var svg_cursor_rect6 = svg_cursor6.rect(2,2,wrec,wrec);
	var svg_cursor_rect7 = svg_cursor7.rect(2,2,wrec,wrec);
	var svg_cursor_rect8 = svg_cursor8.rect(2,2,wrec,wrec);
	var svg_cursor_rect9 = svg_cursor9.rect(2,2,wrec,wrec);
	var svg_cursor_rect10 = svg_cursor10.rect(2,2,wrec,wrec);
	var svg_cursor_rect11 = svg_cursor11.rect(2,2,wrec,wrec);
	var svg_cursor_rect12 = svg_cursor12.rect(2,2,wrec,wrec);
	var svg_cursor_rect13 = svg_cursor13.rect(2,2,wrec,wrec);
	var svg_cursor_rect14 = svg_cursor14.rect(2,2,wrec,wrec);
	var svg_cursor_rect15 = svg_cursor15.rect(2,2,wrec,wrec);
	var svg_cursor_rect16 = svg_cursor16.rect(2,2,wrec,wrec);
	var svg_cursor_rect17 = svg_cursor17.rect(2,2,wrec,wrec);
	var svg_cursor_rect18 = svg_cursor18.rect(2,2,wrec,wrec);
	var svg_cursor_rect19 = svg_cursor19.rect(2,2,wrec,wrec);
	var svg_cursor_rect20 = svg_cursor20.rect(2,2,wrec,wrec);

	cursorAnim();
	tloAnim();

	$('#start_buttons2').hide();
	$('#start_buttons3').hide();
	$('#start_buttons4').hide();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$('#no4').mouseenter(function(){
		$('#tekst_no4').css("opacity","1");
	});
	$('#no4').mouseleave(function(){
		$('#tekst_no4').css("opacity","0");
	});
	$('#wanska').mouseenter(function(){
		$('#tekst_wanska').css("opacity","1");
	});
	$('#wanska').mouseleave(function(){
		$('#tekst_wanska').css("opacity","0");
	});
	$('#kudelski').mouseenter(function(){
		$('#tekst_kudelski').css("opacity","1");
	});
	$('#kudelski').mouseleave(function(){
		$('#tekst_kudelski').css("opacity","0");
	});
	$('#mbreh').mouseenter(function(){
		$('#tekst_mbreh').css("opacity","1");
	});
	$('#mbreh').mouseleave(function(){
		$('#tekst_mbreh').css("opacity","0");
	});
	
	var wwidth;
	var wheight;
	var rand01;
	var rand02;
	var rand03;
	var randx;
	var randy;
	var speed01 = 1000;
	var zmienna01 = 0;
	
	
	function tloAnim(){
		setInterval(function(){
			wwidth = $(window).width();
			wheight = $(window).height();
			
			rand01 = Math.floor((Math.random()*8)+1);
			rand02 = Math.floor((Math.random()*8)+1);
			randx = Math.floor((Math.random()*(wwidth-20))+1);
			randy = Math.floor((Math.random()*(wheight-50))+1);
			if(wwidth<1200){
				$('#nav-title').text("Prokopiuk");
			} else {
				$('#nav-title').text("Łukasz Prokopiuk | Web Design & Development");
			}
			if(zmienna01==10){
				zmienna01=0;
			}
			
				tablica_tlo[zmienna01].attr({
					opacity: 0.8,
					y:2,
					x:rand01
				});
				$('#tlo_anim'+(zmienna01+1)+'').css({
					"top": randy,
					"left": randx
				});		
				tablica_tlo[zmienna01].animate({y:30, x:rand02, opacity:0},speed01);
			zmienna01++;
		},100);
	}
	
	function cursorAnim(){
		if(wwidth>1200){
			setInterval(function(){
			var rand = Math.floor((Math.random()*8)+1);
			var rand2 = Math.floor((Math.random()*8)+1);
			var rand3 = Math.floor((Math.random()*9)+1);

			var speed= 1000;
			if(zmienna==11){
				zmienna=1
			}
				if(zmienna==1){
					svg_cursor_rect1.attr({
						opacity: 0.8,
						y:2,
						x:rand
					});
					$('#cursor_anim1').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect1.animate({y:30, x:rand2, opacity:0},speed);
				}
				if(zmienna==2){
					svg_cursor_rect2.attr({
						opacity:  0.8,
						y:2,
						x:rand
					});
					$('#cursor_anim2').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect2.animate({y:30, x:rand2, opacity:0},speed);
				}
				if(zmienna==3){
					svg_cursor_rect3.attr({
						opacity:  0.8,
						y:2,
						x:rand
					});
					$('#cursor_anim3').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect3.animate({y:30, x:rand2, opacity:0},speed);
				}
				if(zmienna==4){
					svg_cursor_rect4.attr({
						opacity:  0.8,
						y:2,
						x:rand
					});
					$('#cursor_anim4').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect4.animate({y:30, x:rand2, opacity:0},speed);
				}
				if(zmienna==5){
					svg_cursor_rect5.attr({
						opacity:  0.8,
						y:2,
						x:rand
					});
					$('#cursor_anim5').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect5.animate({y:30, x:rand2, opacity:0},speed);
				}
				if(zmienna==1){
					svg_cursor_rect6.attr({
						opacity: 0.8,
						y:2,
						x:rand2
					});
					$('#cursor_anim6').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect6.animate({y:30, x:rand3, opacity:0},speed);
				}
				if(zmienna==2){
					svg_cursor_rect7.attr({
						opacity:  0.8,
						y:2,
						x:rand2
					});
					$('#cursor_anim7').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect7.animate({y:30, x:rand3, opacity:0},speed);
				}
				if(zmienna==3){
					svg_cursor_rect8.attr({
						opacity:  0.8,
						y:2,
						x:rand2
					});
					$('#cursor_anim8').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect8.animate({y:30, x:rand3, opacity:0},speed);
				}
				if(zmienna==4){
					svg_cursor_rect9.attr({
						opacity:  0.8,
						y:2,
						x:rand2
					});
					$('#cursor_anim9').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect9.animate({y:30, x:rand3, opacity:0},speed);
				}
				if(zmienna==5){
					svg_cursor_rect10.attr({
						opacity:  0.8,
						y:2,
						x:rand2
					});
					$('#cursor_anim10').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect10.animate({y:30, x:rand3, opacity:0},speed);
				}
				// ====================
				if(zmienna==6){
					svg_cursor_rect11.attr({
						opacity: 0.8,
						y:2,
						x:rand
					});
					$('#cursor_anim11').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect11.animate({y:30, x:rand2, opacity:0},speed);
				}
				if(zmienna==7){
					svg_cursor_rect12.attr({
						opacity:  0.8,
						y:2,
						x:rand
					});
					$('#cursor_anim12').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect12.animate({y:30, x:rand2, opacity:0},speed);
				}
				if(zmienna==8){
					svg_cursor_rect13.attr({
						opacity:  0.8,
						y:2,
						x:rand
					});
					$('#cursor_anim13').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect13.animate({y:30, x:rand2, opacity:0},speed);
				}
				if(zmienna==9){
					svg_cursor_rect14.attr({
						opacity:  0.8,
						y:2,
						x:rand
					});
					$('#cursor_anim14').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect14.animate({y:30, x:rand2, opacity:0},speed);
				}
				if(zmienna==10){
					svg_cursor_rect15.attr({
						opacity:  0.8,
						y:2,
						x:rand
					});
					$('#cursor_anim15').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect15.animate({y:30, x:rand2, opacity:0},speed);
				}
				if(zmienna==6){
					svg_cursor_rect16.attr({
						opacity: 0.8,
						y:2,
						x:rand2
					});
					$('#cursor_anim16').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect16.animate({y:30, x:rand3, opacity:0},speed);
				}
				if(zmienna==7){
					svg_cursor_rect17.attr({
						opacity:  0.8,
						y:2,
						x:rand2
					});
					$('#cursor_anim17').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect17.animate({y:30, x:rand3, opacity:0},speed);
				}
				if(zmienna==8){
					svg_cursor_rect18.attr({
						opacity:  0.8,
						y:2,
						x:rand2
					});
					$('#cursor_anim18').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect18.animate({y:30, x:rand3, opacity:0},speed);
				}
				if(zmienna==9){
					svg_cursor_rect19.attr({
						opacity:  0.8,
						y:2,
						x:rand2
					});
					$('#cursor_anim19').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect19.animate({y:30, x:rand3, opacity:0},speed);
				}
				if(zmienna==10){
					svg_cursor_rect20.attr({
						opacity:  0.8,
						y:2,
						x:rand2
					});
					$('#cursor_anim20').css({
						"top": ycord+15,
						"left": xcord
					});
					svg_cursor_rect20.animate({y:30, x:rand3, opacity:0},speed);
				}

			zmienna++;
			}, 100);
		}
		
	}
	
	$('.outside-div').mouseenter(function(){
		$('.inside-div', this).css({
			'opacity' : '1'		
		});
		
	});
	$('.outside-div').mouseleave(function(){
		$('.inside-div', this).css({
			'opacity' : '0'		
		});
		
	});
	$(window).scroll(function(){
		cord = $(window).scrollTop();
		if(wwidth>1200){
			if(cord>50){
				$('nav').css({
					'padding-top' : '10px',
					'padding-bottom' : '10px',
					'width' : '90%',
					'padding-left':'5%',
					'padding-right':'5%'
				});
			} else {
				$('nav').css({
					'padding-top' : '30px',
					'padding-bottom' : '30px',
					'width' : '80%',
					'padding-left':'10%',
					'padding-right':'10%'
				});
			}
		} else {
			if(cord>50){
				$('nav').css({
					'padding-top' : '10px',
					'padding-bottom' : '10px',
					'width' : '100%',
					'padding-left':'0',
					'padding-right':'0'
				});
			} else {
				$('nav').css({
					'padding-top' : '30px',
					'padding-bottom' : '30px',
					'width' : '100%',
					'padding-left':'0',
					'padding-right':'0'
				});
			}
		}
		
	});
	var toggle = 0;
	$('#nav-button').click(function(){
		if(toggle==0){
			$('#nav-bar').show("blind",300);
			toggle=1;
		} else {
			$('#nav-bar').hide("blind",300);
			toggle=0;
		}
		
	});
	$('#nav-bar li').click(function(){
			$('#nav-bar').hide("blind",300);
			toggle=0;
	});
	
});








