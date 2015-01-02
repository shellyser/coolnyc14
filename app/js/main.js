$(document).ready(function(){

// snippet from http://justinhileman.info/article/a-jquery-widont-snippet/
// for preventing widowed words.

    $('h1,h2, #stats h5').each(function() {
        $(this).html($(this).html().replace(/\s([^\s<]{0,10})\s*$/,'&nbsp;$1'));
    });


// for scrolling animations
// > panel scroll heights

	var panel = 3000,
	transition = 500,

	beforeStreetUpper = transition,
	afterStreetUpper = beforeStreetUpper + panel,
	beforeStreetLower = afterStreetUpper + transition,
	afterStreetLower = beforeStreetLower + panel*2,
	beforeBrick = afterStreetLower + transition,
	afterBrick = beforeBrick + panel,
	beforeTaxi = afterBrick + transition,
	afterTaxi = beforeTaxi + panel,
	beforeSkyline = afterTaxi + transition,
	afterSkyline = beforeSkyline + panel,
	beforeFence = afterSkyline + transition,
	afterFence = beforeFence + panel,
	beforeBridge = afterFence + transition,
	afterBridge = beforeBridge + panel,
	beforeNycave = afterBridge + transition,
	afterNycave = beforeNycave + panel,
	beforeBalloons = afterNycave + transition,
	afterBalloons =  beforeBalloons + panel,
	beforeOutro = afterBalloons + transition,
	afterOutro = beforeOutro + panel,

	text1of2in = 400,
	text1of2out = 1000,
	text2of2in = 1400,
	text2of2out = 2000,	

	streetUpperText1In = beforeStreetUpper + text1of2in;



	windowHeight = $(window).height();

	if (windowHeight < 800){
		$('html').addClass('shorty');
	}
	else{
		$('html').removeClass('shorty');
	}

	$('#intro').height(windowHeight);
	// $('section').height(windowHeight);


    //nav

    var scrollTime = 1500;

	$("#to-intro, #back-to-top").click(function() {
	    $('body, html').animate({
	        scrollTop: 0 + 'px'
	    }, scrollTime);
	});

	$("#to-street-upper").click(function() {
	    $('body, html').animate({
	        scrollTop: beforeStreetUpper + 'px'
	    }, scrollTime);
	});

	$("#to-street-lower").click(function() {
	    $('body, html').animate({
	        scrollTop: beforeStreetLower + 'px'
	    }, scrollTime);
	});

	$("#to-Brick").click(function() {
	    $('body, html').animate({
	        scrollTop: beforeBrick + 'px'
	    }, scrollTime);
	});

		$("#to-people").click(function() {
	    $('body, html').animate({
	        scrollTop: beforePeople + 'px'
	    }, scrollTime);
	});

		$("#to-participants").click(function() {
	    $('body, html').animate({
	        scrollTop: beforeParticipants + 'px'
	    }, scrollTime);
	});

		$("#to-map").click(function() {
	    $('body, html').animate({
	        scrollTop: beforeMap + 'px'
	    }, scrollTime);
	});

	$("#to-boxes").click(function() {
	    $('body, html').animate({
	        scrollTop: beforeBoxes + 'px'
	    }, scrollTime);
	});

		$("#to-installer").click(function() {
	    $('body, html').animate({
	        scrollTop: beforeInstaller + 'px'
	    }, scrollTime);
	});

		$("#to-apartment").click(function() {
	    $('body, html').animate({
	        scrollTop: beforeApartment + 'px'
	    }, scrollTime);
	});

		$("#to-clock").click(function() {
	    $('body, html').animate({
	        scrollTop: beforeClock + 'px'
	    }, scrollTime);
	});

		$("#to-heatwave").click(function() {
	    $('body, html').animate({
	        scrollTop: beforeHeatwave + 'px'
	    }, scrollTime);
	});

		$("#to-stats").click(function() {
	    $('body, html').animate({
	        scrollTop: beforeStats + 'px'
	    }, scrollTime);
	});

	$("#to-letter").click(function() {
	    $('body, html').animate({
	        scrollTop: beforeLetter + 1 + 'px'
	    }, scrollTime);
	});

	$("#to-phone").click(function() {
	    $('body, html').animate({
	        scrollTop: beforePhone + 'px'
	    }, scrollTime);
	});

		$("#to-balloons").click(function() {
	    $('body, html').animate({
	        scrollTop: beforeBalloons + 'px'
	    }, scrollTime);
	});

		$("#to-outro").click(function() {
	    $('body, html').animate({
	        scrollTop: beforeOutro + 'px'
	    }, scrollTime);
	});

	var isPlaying = false;

	$("#play, #intro-play").click(function() {
		if (!isPlaying){
			isPlaying = true;
			var time = 130000*((afterOutro - $(window).scrollTop())/afterOutro);
		    $('body, html').animate({
		        scrollTop: afterOutro + 'px'
		    }, time, 'linear');
		}
		else{
			$('body, html').stop(true);
			isPlaying = false;
		}
	});

	var scroll = skrollr.init({
		render: function(data) {
	        //Debugging - Log the current scroll position.
			console.log(data.curTop); 
		     	if(data.curTop >= 1528){
		    	    	$('.count').prop('Counter',0).animate({
		    	        Counter: 2032
		    	    }, {
		    	        duration: 2000,
		    	        easing: 'swing',
		    	        step: function (now) {
		    	            $(this).text(Math.ceil(now));
		    	        }
		       	 });
		       	 $('.street-text p').css('visibility', 'visible');		    	     
		    } else {
		    	$('.street-text p').css('visibility', 'hidden');
		    	console.log('Im under 1528');
		    }
		 },        
		// scale: 2,
		// forceHeight: true,
	    constants: {
	        bstreetupper: beforeStreetUpper,
	        astreetupper: afterStreetUpper,
	        bstreetlower: beforeStreetLower,
	        astreetlower: afterStreetLower,
	        bbrick: beforeBrick,
	        abrick: afterBrick,
	        btaxi: beforeTaxi,
	        ataxi: afterTaxi,
	        bskyline: beforeSkyline,
	        askyline: afterSkyline,
	        bfence: beforeFence,
	        afence: afterFence,
	        bbridge: beforeBridge,
	        abridge: afterBridge,
	        bnycave: beforeNycave,
	        anycave: afterNycave,
	        bballoons: beforeBalloons,
	        aballoons: afterBalloons,
	        boutro: beforeOutro,
	        aoutro: afterOutro
	    }
	});

	$('#intro-scroll').delay(1000).fadeIn(2000);
	$('#intro-year').fadeIn(500);
	$('#intro-text').fadeIn(500);
	$('#intro-scroll').each(function() {
	    var elem = $(this);
	    setInterval(function() {
	        if (elem.css('visibility') == 'hidden') {
	            elem.css('visibility', 'visible');
	        } else {
	            elem.css('visibility', 'hidden');
	        }    
	    }, 1000);
	});


});

$(window).resize(function(){
	windowHeight = $(window).height();

	if (windowHeight < 800){
		$('html').addClass('shorty');
	}
	else{
		$('html').removeClass('shorty');
	}

	$('#intro').height(windowHeight);
})