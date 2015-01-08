/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
// (function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);

$(document).ready(function () {

// snippet from http://justinhileman.info/article/a-jquery-widont-snippet/
// for preventing widowed words.

    $('h1,h2, #stats h5').each(function() {
        $(this).html($(this).html().replace(/\s([^\s<]{0,10})\s*$/,'&nbsp;$1'));
    });


// for scrolling animations
// > panel scroll heights

	var panel = 3000,
	transition = 500,

	beforeStreetUpper = transition + panel/2,
	afterStreetUpper = beforeStreetUpper + panel,
	beforeStreetLower = afterStreetUpper + transition,
	afterStreetLower = beforeStreetLower + panel*2.75,
	beforeBrick = afterStreetLower + transition,
	afterBrick = beforeBrick + panel * 0.65,
	beforeTaxi = afterBrick + transition,
	afterTaxi = beforeTaxi + panel,
	beforeSkyline = afterTaxi + transition,
	afterSkyline = beforeSkyline + panel,
	beforeFence = afterSkyline + transition,
	afterFence = beforeFence + panel/2,
	beforeBridge = afterFence + transition,
	afterBridge = beforeBridge + panel/0.9,
	beforeNycave = afterBridge + transition,
	afterNycave = beforeNycave + panel,
	beforeOutro = afterNycave + transition,
	afterOutro = beforeOutro + panel,


	$window = $(window),
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
		     	if(data.curTop >= 13570){
		    	    	$('#circles .circle-1 h1').prop('Counter',0).animate({
		    	        Counter: 2578
		    	    	}, {
		    	        duration: 2000,
		    	        easing: 'swing',
		    	        step: function (now) {
		    	            $(this).text(Math.ceil(now));
		    	        }
		       	 	});
		    	}
		    	if(data.curTop >= 14670){
		    		$('#circles .circle-2 h1 span').prop('Counter',0).animate({
		    	        Counter: 67
		    	    	}, {
		    	        duration: 2000,
		    	        easing: 'swing',
		    	        step: function (now) {
		    	            $(this).text(Math.ceil(now));
		    	        }
		       	 });			       	 
		    }
	    		if(data.curTop >= 15664){
	    			$('#circles .circle-3 h1 span').prop('Counter',0).animate({
	    		        Counter: 45
	    		    	}, {
	    		        duration: 2000,
	    		        easing: 'swing',
	    		        step: function (now) {
	    		            $(this).text(Math.ceil(now));
	    		        }
	    	   		});			       	 
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
		        boutro: beforeOutro,
		        aoutro: afterOutro
		       }
		});

		
		// get window size
		var winW = 0, winH = 0;
		  if( typeof( window.innerWidth ) === 'number' ) {
		    //Non-IE
		    winW = window.innerWidth;
		    winH = window.innerHeight;
		  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		    //IE 6+ in 'standards compliant mode'
		    winW = document.documentElement.clientWidth;
		    winH = document.documentElement.clientHeight;
		  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		    //IE 4 compatible
		    winW = document.body.clientWidth;
		    winH = document.body.clientHeight;
		  };

	    //set html with class shorty if window height is smaller than 800px
		if (winH < 800){
			$('html').addClass('shorty');
		}
		else{
			$('html').removeClass('shorty');
		}


		// size triangles
		$('.triangle-1').css({'border-top': winH + 'px solid rgba(0, 0, 0, 1)'});
		$('.triangle-1').css({'border-right': winW + 'px solid transparent'});
		$('.triangle-2').css({'border-bottom': winH + 'px solid rgba(0, 0, 0, 1)'});
		$('.triangle-2').css({'border-left': winW + 'px solid transparent'});

		
		//intro fadeIn effects on first slide
		$('#intro-scroll').delay(1000).fadeIn(2000);
		$('#intro-title').delay(500).fadeIn(2000);

		//size background-box in slide 8
		// $('#fence-content').css({"width": winW - (winW * 0.2) + 'px'});
		// $('#fence-content').css({"height": winH - (winH * 0.2) + 'px'});
		

});
$(window).resize(function () {
    var winWR = 0, winHR = 0;
	if( typeof( window.innerWidth ) == 'number' ) {
	//Non-IE
	winWR = window.innerWidth;
	winHR = window.innerHeight;
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
	//IE 6+ in 'standards compliant mode'
	winWR = document.documentElement.clientWidth;
	winHR = document.documentElement.clientHeight;
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
	//IE 4 compatible
	winWR = document.body.clientWidth;
	winHR = document.body.clientHeight;
	}
    $('.triangle-1').css({'border-top': winHR + 'px solid rgba(0, 0, 0, 1)'});
    $('.triangle-1').css({'border-right': winWR + 'px solid transparent'});
    $('.triangle-2').css({'border-bottom': winHR + 'px solid rgba(0, 0, 0, 1)'});
    $('.triangle-2').css({'border-left': winWR + 'px solid transparent'});

    // $('#fence-content').css({"width": winWR - (winWR * 0.2) + 'px'});
    // $('#fence-content').css({"height": winHR - (winHR * 0.2) + 'px'});
});

