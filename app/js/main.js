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
	afterStreetLower = beforeStreetLower + panel,
	beforeThanks = afterStreetLower + transition,
	afterThanks = beforeThanks + panel,
	beforePeople = afterThanks + transition,
	afterPeople = beforePeople + panel,
	beforeParticipants = afterPeople + transition,
	afterParticipants = beforeParticipants + panel,
	beforeMap = afterParticipants + transition,
	afterMap = beforeMap + panel,
	beforeBoxes = afterMap + transition,
	afterBoxes = beforeBoxes + panel,
	beforeInstaller = afterBoxes + transition,
	afterInstaller = beforeInstaller + panel,
	beforeBalloons = afterInstaller + transition,
	afterBalloons =  beforeBalloons + panel,
	beforeOutro = afterBalloons + transition,
	afterOutro = beforeOutro + panel,

	text1of2in = 400,
	text1of2out = 1000,
	text2of2in = 1400,
	text2of2out = 2000

	streetUpperText1In = beforeStreetUpper + text1of2in,



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

	$("#to-thanks").click(function() {
	    $('body, html').animate({
	        scrollTop: beforeThanks + 'px'
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
		// scale: 2,
		// forceHeight: true,
	  render: function(data) {		    
	        //Debugging - Log the current scroll position.
	        console.log(data.curTop);
			    },
	    constants: {
	        bstreetupper: beforeStreetUpper,
	        astreetupper: afterStreetUpper,
	        bstreetlower: beforeStreetLower,
	        astreetlower: afterStreetLower,
	        bthanks: beforeThanks,
	        athanks: afterThanks,
	        bpeople: beforePeople,
	        apeople: afterPeople,
	        bparticipants: beforeParticipants,
	        aparticipants: afterParticipants,
	        bmap: beforeMap,
	        amap: afterMap,
	        bboxes: beforeBoxes,
	        aboxes: afterBoxes,
	        binstaller: beforeInstaller,
	        ainstaller: afterInstaller,
	        bballoons: beforeBalloons,
	        aballoons: afterBalloons,
	        boutro: beforeOutro,
	        aoutro: afterOutro
	    }
	});

	$('#intro-scroll').fadeIn(2000);

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
