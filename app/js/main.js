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

	beforeStreetUpper = transition + panel*1.75,
	afterStreetUpper = beforeStreetUpper + panel*2.5,
	beforeSkyline = afterStreetUpper + transition,
	afterSkyline = beforeSkyline + panel/0.6,
	beforeBrick = afterSkyline + transition,
	afterBrick = beforeBrick + panel * 0.85,
	beforeNycave = afterBrick + transition,
	afterNycave = beforeNycave + panel,
	beforeStreetLower = afterNycave + transition,
	afterStreetLower = beforeStreetLower + panel*2.9,
	beforeFence = afterStreetLower + transition,
	afterFence = beforeFence + panel,
	beforeBridge = afterFence + transition,
	afterBridge = beforeBridge + panel/0.75,
	beforeTaxi = afterBridge + transition,
	afterTaxi = beforeTaxi + panel,
	beforeOutro = afterTaxi + transition,
	afterOutro = beforeOutro + panel;

	// var clickCounter = 0;

	// $("#intro-scroll").click(function () {
	//     var selectors = [ 2200 , 5700 ];
	//     var position = document.body.scrollTop;
	//     if(position >= selectors[0]){
	//     	clickCounter++;
	//     } 
	//     if (clickCounter === 0){
	//     	//animate
	//     	$("html,body").animate({scrollTop: selectors[0] + 'px' }, 2000);
	//     	clickCounter++;
	//     }
	//     else{
	//     	$("html,body").animate({scrollTop: selectors[1] + 'px' }, {
	//     		duration: 4000,
	//     		easing: 'swing'
	//     	});
	//     	clickCounter = 0;
	//     }
	// });

	var scrollTime = 3000;

	$("#to-intro, #back-to-top").click(function() {
	    $('body, html').animate({
	        scrollTop: 0 + 'px'
	    }, scrollTime);
	});

	$("#to-street-upper").click(function() {
	    $('body, html').animate({
	        scrollTop: afterStreetUpper + 'px'
	    }, scrollTime);
	});

	$("#to-skyline").click(function() {
	    $('body, html').animate({
	        scrollTop: afterSkyline + 'px'
	    }, scrollTime);
	});

	$("#to-brick").click(function() {
	    $('body, html').animate({
	        scrollTop: afterBrick + 'px'
	    }, scrollTime);
	});

	$("#to-nycave").click(function() {
	    $('body, html').animate({
	        scrollTop: afterNycave + 'px'
	    }, scrollTime);
	});

	$("#to-street-lower").click(function() {
	    $('body, html').animate({
	        scrollTop: afterStreetLower + 'px'
	    }, scrollTime);
	});

	$("#to-fence").click(function() {
	    $('body, html').animate({
	        scrollTop: afterFence + 'px'
	    }, scrollTime);
	});

	$("#to-bridge").click(function() {
	    $('body, html').animate({
	        scrollTop: afterBridge + 'px'
	    }, scrollTime);
	});

	$("#to-taxi").click(function() {
	    $('body, html').animate({
	        scrollTop: afterTaxi + 'px'
	    }, scrollTime);
	});

	$("#to-outro").click(function() {
	    $('body, html').animate({
	        scrollTop: afterOutro + 1500 + 'px'
	    }, scrollTime);
	});

	var isPlaying = false;

	$("#play, #intro-play").click(function() {
		if (!isPlaying){
			isPlaying = true;
			var time = 100000*((afterOutro - $(window).scrollTop())/afterOutro);
		    $('body, html').animate({
		        scrollTop: afterOutro + 1500 + 'px'
		    }, time, 'linear');
		}
		else{
			$('body, html').stop(true);
			isPlaying = false;
		}
	});

	$(".play").click(function() {
		if (!isPlaying){
			isPlaying = true;
			var time = 100000*((afterOutro - $(window).scrollTop())/afterOutro);
		    $('body, html').animate({
		        scrollTop: afterOutro + 1500 + 'px'
		    }, time, 'linear');
		}
	});



	 $(".fa-arrow-down").on({
	 	'touchstart': function(e){
	 		alert("button clicked");
		   	 if (!isPlaying){
		 		isPlaying = true;
		 		var time = 100000*((afterOutro - $(window).scrollTop())/afterOutro);
				 if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {       
				 		alert("I'm almost there!");
				             setTimeout(window.scrollTo( 0, 0), 100); // first value for left offset, second value for top offset
				 } 
				 else{
				 	$('body, html').animate({
				 	    scrollTop: afterOutro + 1500 + 'px'
				 	}, time, 'linear');
				 }
			}
		} 
	});

	var scroll = skrollr.init({
		// scale: 2,
		// forceHeight: false,
		render: function(data) {
	        //Debugging - Log the current scroll position.
			console.log(data.curTop); 
	     	if(data.curTop >= 43880){
	    	    	$('#circles #circle-1 h1 span').prop('Counter',0).animate({
	    	        Counter: 6
	    	    	}, {
	    	        duration: 2000,
	    	        easing: 'swing',
	    	        step: function (now) {
						$(this).text(Math.ceil(now));
    	          	}
	       	 	});
	    	}
	    	if(data.curTop >= 44406){
	    		$('#circles #circle-2 h1 span').prop('Counter',0).animate({
	    	          Counter: 1
	    	      		}, {
	    	          duration: 2000,
	    	          easing: 'swing',
	    	          step: function (now) {
	    	              $(this).text(Math.ceil(now));
	    	          }
	       	 });			       	 
	    }
    		if(data.curTop >= 44880){
    			$('#circles #circle-3 h1 span').prop('Counter',0).animate({
		           Counter: 20
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

	  
	  
	  //adds a loading id until the page is loaded
	  function onReady(callback) {
	      var intervalID = window.setInterval(checkReady, 1000);

	      function checkReady() {
	          if (document.getElementsByTagName('body')[0] !== undefined) {
	              window.clearInterval(intervalID);
	              callback.call(this);
	          }
	      }
	  }

	  function show(id, value) {
	      document.getElementById(id).style.display = value ? 'block' : 'none';
	  }

	  onReady(function () {
	      show('page', true);
	      show('loading', false);
	  });

    //set html with class shorty if window height is smaller than 800px
	if (winH < 800){
		$('html').addClass('shorty');
	}
	else{
		$('html').removeClass('shorty');
	}
	//calc in intro section
	$('#intro-content').css({'height': winH - 80 - 86 + 'px'});
	$('.shorty #intro-content').css({'height': winH - 46 - 60 + 'px'});
	//ie replacement for calc in intro section
	$('#ie #intro-content').css({'height': winH - (50 - 86) + 'px'});
	//// calc in intro section
	$('#fence-content').css({'height': winH - 126 + 'px'});	
	////ie replacement for calc in intro section
	$('#ie #fence-content').css({'height': winH - 112 + 'px'});	
								
	// size triangles
	$('.triangle-1').css({'border-top': winH + 'px solid rgba(0, 0, 0, 1)'});
	$('.triangle-1').css({'border-right': winW + 'px solid transparent'});
	$('.triangle-2').css({'border-bottom': winH + 'px solid rgba(0, 0, 0, 1)'});
	$('.triangle-2').css({'border-left': winW + 'px solid transparent'});

	
	//intro fadeIn effects on first slide
	$('#intro-scroll').delay(1000).fadeIn(2000);
	$('#intro-title').delay(500).fadeIn(2000);

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

    if (winHR < 800){
    	$('html').addClass('shorty');
    }
    else{
    	$('html').removeClass('shorty');
    }

    ///calc in intro section
	$('#intro-content').css({'height': winHR - 80 - 86 + 'px'});
	$('.shorty #intro-content').css({'height': winHR - 46 - 60 + 'px'});
	//ie replacement for calc in intro section
	$('#ie #intro-content').css({'height': winHR - (50 - 86) + 'px'});
	//// calc in intro section
	$('#fence-content').css({'height': winHR - 126 + 'px'});	
	////ie replacement for calc in intro section
	$('#ie #fence-content').css({'height': winHR - 112 + 'px'});		
});

