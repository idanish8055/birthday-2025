$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$('.timer').hide();
		$('.password-form').hide();
		$('.banner-man-wrapper').fadeIn('slow').delay(3000);
		$('.banner-man-wrapper .bannar').addClass('bannar-come');

		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#play').fadeIn('slow');
			$('#bannar_coming').fadeIn('slow');
		});
		ribbonCelebration();
		playSong();
	});	

	function playSong(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(3500).promise().done(function(){
			
		});
	}
	$('#play').click(function(){
		
	});

	$('#bannar_coming').click(function(){
		$('.banner-container').fadeIn('slow');
		$('.banner-man-wrapper').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		$('.banner-container .bannar').addClass('bannar-come');
		$('.banner-container video').fadeIn('slow');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		
		// fireworks();

		// $('.balloon-border').animate({top:-500},8000);
		// $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		// $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// // $('#b3').addClass('balloons-rotate-behaviour-two');
		// // $('#b4').addClass('balloons-rotate-behaviour-one');
		// // $('#b5').addClass('balloons-rotate-behaviour-one');
		// // $('#b6').addClass('balloons-rotate-behaviour-two');
		// // $('#b7').addClass('balloons-rotate-behaviour-one');
		// loopOne();
		// loopTwo();
		// loopThree();
		// loopFour();
		// loopFive();
		// loopSix();
		// loopSeven();
		
		// $(this).fadeOut('slow').delay(5000).promise().done(function(){
		// 	$('#cake_fadein').fadeIn('slow');
		// });
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		// window.scrollBy(0, window.innerHeight+100);
		$('.banner-container').fadeOut('slow');
		window.scrollTo(0, document.body.scrollHeight);
		$(this).fadeOut('slow');
		
		var i;

		function msgLoop (i) {
			window.scrollTo(0, document.body.scrollHeight);
			$("p:nth-child("+i+")").fadeIn('slow').delay(800).promise().done(function(){
				i=i+1;
				$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
				if(i==50){
					$("p:nth-child(49)").fadeIn('slow').promise().done(function () {
					});
					
				}
				else{
					msgLoop(i);
				}			

			});
			// body...
		}
		
		msgLoop(0);
		
	});

	// Password
	
	let date = "";

	$('.digit-group').find('input').each(function() {
		$(this).attr('maxlength', 1);
		$(this).on('keyup', function(e) {
			if(!isNaN(e.target.value)){
				var parent = $($(this).parent());
				let errorSpan = document.querySelector(".password-form .error");
				let digit1 = document.querySelector('#digit-1').value;
				let digit2 = document.querySelector('#digit-2').value;
				let digit3 = document.querySelector('#digit-3').value;
				let digit4 = document.querySelector('#digit-4').value;
				errorSpan.style.display = "none";
				if(e.keyCode === 8 || e.keyCode === 37) {
					var prev = parent.find('input#' + $(this).data('previous'));
					
					if(prev.length) {
						$(prev).select();
					}
					if(digit1 != "" && digit2 != "" && digit3 != "" && digit4 != ""){
						date = digit1+digit2+digit3+digit4;
					}
				} else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
					var next = parent.find('input#' + $(this).data('next'));
					if(digit1 != "" && digit2 != "" && digit3 != "" && digit4 != ""){
						date = digit1+digit2+digit3+digit4;
					}
					if(next.length) {
						$(next).select();
					} else {
						if(date === '2009'){
							document.querySelector('.timer').style.display = "block";
							document.querySelector('.password-form').style.display = "none";
						}
						else{
							errorSpan.style.display = "block";
						}
					}
				}
				
			}
			else{
				this.value = this.value.replace(/[^0-9]/g, '');
			}
		});
	});

	
});

// Ribbon celebration
function ribbonCelebration(){
    const end = Date.now() + 30 * 1000;

    // go Buckeyes!
    const colors = ["#bb0000", "#ffffff", "#FFFF00"];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
        });

        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

(function () {
	const second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24;

	let today = new Date(),
		dd = String(today.getDate()).padStart(2, "0"),
		mm = String(today.getMonth() + 1).padStart(2, "0"),
		yyyy = today.getFullYear(),
		nextYear = yyyy + 1,
		dayMonth = "09/20/",
		birthday = dayMonth + yyyy;
		
	today = mm + "/" + dd + "/" + yyyy;
	// if (today > birthday) {
	// 	birthday = dayMonth + nextYear;
	// }
	//end
	
  	const countDown = new Date(birthday).getTime(),
    x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)) < 10 ? '0'+Math.floor(distance / (day)) : Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)) < 10 ? '0'+Math.floor((distance % (day)) / (hour)) : Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)) < 10 ? '0'+Math.floor((distance % (hour)) / (minute)) : Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second) < 10 ? '0'+Math.floor((distance % (minute)) / second) : Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
			document.querySelector('.navbar').style.display = 'block';
          	clearInterval(x);
        }
        //seconds
    }, 0)
}());