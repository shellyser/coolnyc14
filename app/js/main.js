/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
(function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);

( function( $ ) {

// snippet from http://justinhileman.info/article/a-jquery-widont-snippet/
// for preventing widowed words.

    $('h1,h2, #stats h5').each(function() {
        $(this).html($(this).html().replace(/\s([^\s<]{0,10})\s*$/,'&nbsp;$1'));
    });


// for scrolling animations
// > panel scroll heights

	var panel = 3000,
	transition = 500,

	beforeStreetUpper = transition + panel/3,
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
	text2of2out = 2000

	streetUpperText1In = beforeStreetUpper + text1of2in;


	$window = $(window);
	$slide = $('.homeSlide');
	$slideTall = $('.homeSlideTall');
	$slideTall2 = $('.homeSlideTall2');
	$body = $('body');
	// windowHeight = $(window).height();

	// if (windowHeight < 800){
	// 	$('html').addClass('shorty');
	// }
	// else{
	// 	$('html').removeClass('shorty');
	// }

	// $('#intro').height(windowHeight);
	// $('section').height(windowHeight);

	// function adjustWindow(){

		var scroll = skrollr.init({
			// scale: 2,
			// forceHeight: true,
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

		
		// get window size
		winW = $window.width();
		winH = $window.height();

		slideH = winH;

		if(slideH <= 450) {
			slideH = 450;
		} 

		scroll.refresh();

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
		
	// }
// 	adjustWindow();

// $(window).resize(function() {   
//     adjustWindow();
// });
} )( jQuery );