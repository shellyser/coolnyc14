$(document).ready(function(){

// snippet from http://justinhileman.info/article/a-jquery-widont-snippet/
// for preventing widowed words.

    $('h1,h2, #stats h5').each(function() {
        $(this).html($(this).html().replace(/\s([^\s<]{0,10})\s*$/,'&nbsp;$1'));
    });


// for scrolling animations
// > panel scroll heights

	var panel = 4000,
	transition = 600,

	beforeStreetUpper = transition,
	afterStreetUpper = beforeStreetUpper + panel*2,
	beforeStreetLower = afterStreetUpper + transition,
	afterStreetLower = beforeStreetLower + panel*1.5,
	beforeThanks = afterStreetLower + transition,
	afterThanks = beforeThanks + panel,
	beforePeople = afterThanks + transition,
	afterPeople = beforePeople + panel*1.3,
	beforeParticipants = afterPeople + transition,
	afterParticipants = beforeParticipants + panel*1.5,
	beforeMap = afterParticipants + transition,
	afterMap = beforeMap + panel*3,
	beforeBoxes = afterMap + transition,
	afterBoxes = beforeBoxes + panel*2,
	beforeInstaller = afterBoxes + transition,
	afterIntstaller = beforeInstaller + panel*2,
	beforeApartment = afterIntstaller + transition,
	afterApartment = beforeApartment + panel*1.5,
	beforeClock = afterApartment + transition,
	afterClock = beforeClock + panel*3,
	beforeHeatwave = afterClock + transition,
	afterHeatwave = beforeHeatwave + panel*3,
	beforeStats = afterHeatwave + transition,
	afterStats = beforeStats + panel*3.5,
	beforeLetter = afterStats + transition,
	afterLetter = beforeLetter + panel,
	beforePhone = afterLetter + transition,
	afterPhone =  beforePhone + panel*1.5,
	beforeBalloons = afterPhone + transition,
	afterBalloons =  beforeBalloons + panel*1.5,
	beforeOutro = afterBalloons + transition,
	afterOutro = beforeOutro + panel*2,

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
	        ainstaller: afterIntstaller,
	        bapartment: beforeApartment,
	        aapartment: afterApartment,
	        bclock: beforeClock,
	        aclock: afterClock,
	        bheatwave: beforeHeatwave,
	        aheatwave: afterHeatwave,
	        bstats: beforeStats,
	        astats: afterStats,
	        bletter: beforeLetter,
	        aletter: afterLetter,
	        bphone: beforePhone,
	        aphone: afterPhone,
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
