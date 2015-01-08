!function(a,b,c){"use strict";function d(c){if(e=b.documentElement,f=b.body,S(),gb=this,c=c||{},lb=c.constants||{},c.easing)for(var d in c.easing)V[d]=c.easing[d];sb=c.edgeStrategy||"set",jb={beforerender:c.beforerender,render:c.render,keyframe:c.keyframe},kb=c.forceHeight!==!1,kb&&(Jb=c.scale||1),mb=c.mobileDeceleration||y,ob=c.smoothScrolling!==!1,pb=c.smoothScrollingDuration||z,qb={targetTop:gb.getScrollTop()},Rb=(c.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||a.opera)})(),Rb?(ib=b.getElementById("skrollr-body"),ib&&fb(),W(),Db(e,[s,v],[t])):Db(e,[s,u],[t]),gb.refresh(),vb(a,"resize orientationchange",function(){var a=e.clientWidth,b=e.clientHeight;(b!==Ob||a!==Nb)&&(Ob=b,Nb=a,Pb=!0)});var g=T();return function h(){Z(),ub=g(h)}(),gb}var e,f,g={get:function(){return gb},init:function(a){return gb||new d(a)},VERSION:"0.6.26"},h=Object.prototype.hasOwnProperty,i=a.Math,j=a.getComputedStyle,k="touchstart",l="touchmove",m="touchcancel",n="touchend",o="skrollable",p=o+"-before",q=o+"-between",r=o+"-after",s="skrollr",t="no-"+s,u=s+"-desktop",v=s+"-mobile",w="linear",x=1e3,y=.004,z=200,A="start",B="end",C="center",D="bottom",E="___skrollable_id",F=/^(?:input|textarea|button|select)$/i,G=/^\s+|\s+$/g,H=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,I=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,J=/^(@?[a-z\-]+)\[(\w+)\]$/,K=/-([a-z0-9_])/g,L=function(a,b){return b.toUpperCase()},M=/[\-+]?[\d]*\.?[\d]+/g,N=/\{\?\}/g,O=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,P=/[a-z\-]+-gradient/g,Q="",R="",S=function(){var a=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(j){var b=j(f,null);for(var c in b)if(Q=c.match(a)||+c==c&&b[c].match(a))break;if(!Q)return void(Q=R="");Q=Q[0],"-"===Q.slice(0,1)?(R=Q,Q={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[Q]):R="-"+Q.toLowerCase()+"-"}},T=function(){var b=a.requestAnimationFrame||a[Q.toLowerCase()+"RequestAnimationFrame"],c=Gb();return(Rb||!b)&&(b=function(b){var d=Gb()-c,e=i.max(0,1e3/60-d);return a.setTimeout(function(){c=Gb(),b()},e)}),b},U=function(){var b=a.cancelAnimationFrame||a[Q.toLowerCase()+"CancelAnimationFrame"];return(Rb||!b)&&(b=function(b){return a.clearTimeout(b)}),b},V={begin:function(){return 0},end:function(){return 1},linear:function(a){return a},quadratic:function(a){return a*a},cubic:function(a){return a*a*a},swing:function(a){return-i.cos(a*i.PI)/2+.5},sqrt:function(a){return i.sqrt(a)},outCubic:function(a){return i.pow(a-1,3)+1},bounce:function(a){var b;if(.5083>=a)b=3;else if(.8489>=a)b=9;else if(.96208>=a)b=27;else{if(!(.99981>=a))return 1;b=91}return 1-i.abs(3*i.cos(a*b*1.028)/b)}};d.prototype.refresh=function(a){var d,e,f=!1;for(a===c?(f=!0,hb=[],Qb=0,a=b.getElementsByTagName("*")):a.length===c&&(a=[a]),d=0,e=a.length;e>d;d++){var g=a[d],h=g,i=[],j=ob,k=sb,l=!1;if(f&&E in g&&delete g[E],g.attributes){for(var m=0,n=g.attributes.length;n>m;m++){var p=g.attributes[m];if("data-anchor-target"!==p.name)if("data-smooth-scrolling"!==p.name)if("data-edge-strategy"!==p.name)if("data-emit-events"!==p.name){var q=p.name.match(H);if(null!==q){var r={props:p.value,element:g,eventType:p.name.replace(K,L)};i.push(r);var s=q[1];s&&(r.constant=s.substr(1));var t=q[2];/p$/.test(t)?(r.isPercentage=!0,r.offset=(0|t.slice(0,-1))/100):r.offset=0|t;var u=q[3],v=q[4]||u;u&&u!==A&&u!==B?(r.mode="relative",r.anchors=[u,v]):(r.mode="absolute",u===B?r.isEnd=!0:r.isPercentage||(r.offset=r.offset*Jb))}}else l=!0;else k=p.value;else j="off"!==p.value;else if(h=b.querySelector(p.value),null===h)throw'Unable to find anchor target "'+p.value+'"'}if(i.length){var w,x,y;!f&&E in g?(y=g[E],w=hb[y].styleAttr,x=hb[y].classAttr):(y=g[E]=Qb++,w=g.style.cssText,x=Cb(g)),hb[y]={element:g,styleAttr:w,classAttr:x,anchorTarget:h,keyFrames:i,smoothScrolling:j,edgeStrategy:k,emitEvents:l,lastFrameIndex:-1},Db(g,[o],[])}}}for(zb(),d=0,e=a.length;e>d;d++){var z=hb[a[d][E]];z!==c&&($(z),ab(z))}return gb},d.prototype.relativeToAbsolute=function(a,b,c){var d=e.clientHeight,f=a.getBoundingClientRect(),g=f.top,h=f.bottom-f.top;return b===D?g-=d:b===C&&(g-=d/2),c===D?g+=h:c===C&&(g+=h/2),g+=gb.getScrollTop(),g+.5|0},d.prototype.animateTo=function(a,b){b=b||{};var d=Gb(),e=gb.getScrollTop();return nb={startTop:e,topDiff:a-e,targetTop:a,duration:b.duration||x,startTime:d,endTime:d+(b.duration||x),easing:V[b.easing||w],done:b.done},nb.topDiff||(nb.done&&nb.done.call(gb,!1),nb=c),gb},d.prototype.stopAnimateTo=function(){nb&&nb.done&&nb.done.call(gb,!0),nb=c},d.prototype.isAnimatingTo=function(){return!!nb},d.prototype.isMobile=function(){return Rb},d.prototype.setScrollTop=function(b,c){return rb=c===!0,Rb?Sb=i.min(i.max(b,0),Ib):a.scrollTo(0,b),gb},d.prototype.getScrollTop=function(){return Rb?Sb:a.pageYOffset||e.scrollTop||f.scrollTop||0},d.prototype.getMaxScrollTop=function(){return Ib},d.prototype.on=function(a,b){return jb[a]=b,gb},d.prototype.off=function(a){return delete jb[a],gb},d.prototype.destroy=function(){var a=U();a(ub),xb(),Db(e,[t],[s,u,v]);for(var b=0,d=hb.length;d>b;b++)eb(hb[b].element);e.style.overflow=f.style.overflow="",e.style.height=f.style.height="",ib&&g.setStyle(ib,"transform","none"),gb=c,ib=c,jb=c,kb=c,Ib=0,Jb=1,lb=c,mb=c,Kb="down",Lb=-1,Nb=0,Ob=0,Pb=!1,nb=c,ob=c,pb=c,qb=c,rb=c,Qb=0,sb=c,Rb=!1,Sb=0,tb=c};var W=function(){var d,g,h,j,o,p,q,r,s,t,u,v;vb(e,[k,l,m,n].join(" "),function(a){var e=a.changedTouches[0];for(j=a.target;3===j.nodeType;)j=j.parentNode;switch(o=e.clientY,p=e.clientX,t=a.timeStamp,F.test(j.tagName)||a.preventDefault(),a.type){case k:d&&d.blur(),gb.stopAnimateTo(),d=j,g=q=o,h=p,s=t;break;case l:F.test(j.tagName)&&b.activeElement!==j&&a.preventDefault(),r=o-q,v=t-u,gb.setScrollTop(Sb-r,!0),q=o,u=t;break;default:case m:case n:var f=g-o,w=h-p,x=w*w+f*f;if(49>x){if(!F.test(d.tagName)){d.focus();var y=b.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,a.view,1,e.screenX,e.screenY,e.clientX,e.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),d.dispatchEvent(y)}return}d=c;var z=r/v;z=i.max(i.min(z,3),-3);var A=i.abs(z/mb),B=z*A+.5*mb*A*A,C=gb.getScrollTop()-B,D=0;C>Ib?(D=(Ib-C)/B,C=Ib):0>C&&(D=-C/B,C=0),A*=1-D,gb.animateTo(C+.5|0,{easing:"outCubic",duration:A})}}),a.scrollTo(0,0),e.style.overflow=f.style.overflow="hidden"},X=function(){var a,b,c,d,f,g,h,j,k,l,m,n=e.clientHeight,o=Ab();for(j=0,k=hb.length;k>j;j++)for(a=hb[j],b=a.element,c=a.anchorTarget,d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],l=h.offset,m=o[h.constant]||0,h.frame=l,h.isPercentage&&(l*=n,h.frame=l),"relative"===h.mode&&(eb(b),h.frame=gb.relativeToAbsolute(c,h.anchors[0],h.anchors[1])-l,eb(b,!0)),h.frame+=m,kb&&!h.isEnd&&h.frame>Ib&&(Ib=h.frame);for(Ib=i.max(Ib,Bb()),j=0,k=hb.length;k>j;j++){for(a=hb[j],d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],m=o[h.constant]||0,h.isEnd&&(h.frame=Ib-h.offset+m);a.keyFrames.sort(Hb)}},Y=function(a,b){for(var c=0,d=hb.length;d>c;c++){var e,f,i=hb[c],j=i.element,k=i.smoothScrolling?a:b,l=i.keyFrames,m=l.length,n=l[0],s=l[l.length-1],t=k<n.frame,u=k>s.frame,v=t?n:s,w=i.emitEvents,x=i.lastFrameIndex;if(t||u){if(t&&-1===i.edge||u&&1===i.edge)continue;switch(t?(Db(j,[p],[r,q]),w&&x>-1&&(yb(j,n.eventType,Kb),i.lastFrameIndex=-1)):(Db(j,[r],[p,q]),w&&m>x&&(yb(j,s.eventType,Kb),i.lastFrameIndex=m)),i.edge=t?-1:1,i.edgeStrategy){case"reset":eb(j);continue;case"ease":k=v.frame;break;default:case"set":var y=v.props;for(e in y)h.call(y,e)&&(f=db(y[e].value),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f));continue}}else 0!==i.edge&&(Db(j,[o,q],[p,r]),i.edge=0);for(var z=0;m-1>z;z++)if(k>=l[z].frame&&k<=l[z+1].frame){var A=l[z],B=l[z+1];for(e in A.props)if(h.call(A.props,e)){var C=(k-A.frame)/(B.frame-A.frame);C=A.props[e].easing(C),f=cb(A.props[e].value,B.props[e].value,C),f=db(f),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f)}w&&x!==z&&("down"===Kb?yb(j,A.eventType,Kb):yb(j,B.eventType,Kb),i.lastFrameIndex=z);break}}},Z=function(){Pb&&(Pb=!1,zb());var a,b,d=gb.getScrollTop(),e=Gb();if(nb)e>=nb.endTime?(d=nb.targetTop,a=nb.done,nb=c):(b=nb.easing((e-nb.startTime)/nb.duration),d=nb.startTop+b*nb.topDiff|0),gb.setScrollTop(d,!0);else if(!rb){var f=qb.targetTop-d;f&&(qb={startTop:Lb,topDiff:d-Lb,targetTop:d,startTime:Mb,endTime:Mb+pb}),e<=qb.endTime&&(b=V.sqrt((e-qb.startTime)/pb),d=qb.startTop+b*qb.topDiff|0)}if(Rb&&ib&&g.setStyle(ib,"transform","translate(0, "+-Sb+"px) "+tb),rb||Lb!==d){Kb=d>Lb?"down":Lb>d?"up":Kb,rb=!1;var h={curTop:d,lastTop:Lb,maxTop:Ib,direction:Kb},i=jb.beforerender&&jb.beforerender.call(gb,h);i!==!1&&(Y(d,gb.getScrollTop()),Lb=d,jb.render&&jb.render.call(gb,h)),a&&a.call(gb,!1)}Mb=e},$=function(a){for(var b=0,c=a.keyFrames.length;c>b;b++){for(var d,e,f,g,h=a.keyFrames[b],i={};null!==(g=I.exec(h.props));)f=g[1],e=g[2],d=f.match(J),null!==d?(f=d[1],d=d[2]):d=w,e=e.indexOf("!")?_(e):[e.slice(1)],i[f]={value:e,easing:V[d]};h.props=i}},_=function(a){var b=[];return O.lastIndex=0,a=a.replace(O,function(a){return a.replace(M,function(a){return a/255*100+"%"})}),R&&(P.lastIndex=0,a=a.replace(P,function(a){return R+a})),a=a.replace(M,function(a){return b.push(+a),"{?}"}),b.unshift(a),b},ab=function(a){var b,c,d={};for(b=0,c=a.keyFrames.length;c>b;b++)bb(a.keyFrames[b],d);for(d={},b=a.keyFrames.length-1;b>=0;b--)bb(a.keyFrames[b],d)},bb=function(a,b){var c;for(c in b)h.call(a.props,c)||(a.props[c]=b[c]);for(c in a.props)b[c]=a.props[c]},cb=function(a,b,c){var d,e=a.length;if(e!==b.length)throw"Can't interpolate between \""+a[0]+'" and "'+b[0]+'"';var f=[a[0]];for(d=1;e>d;d++)f[d]=a[d]+(b[d]-a[d])*c;return f},db=function(a){var b=1;return N.lastIndex=0,a[0].replace(N,function(){return a[b++]})},eb=function(a,b){a=[].concat(a);for(var c,d,e=0,f=a.length;f>e;e++)d=a[e],c=hb[d[E]],c&&(b?(d.style.cssText=c.dirtyStyleAttr,Db(d,c.dirtyClassAttr)):(c.dirtyStyleAttr=d.style.cssText,c.dirtyClassAttr=Cb(d),d.style.cssText=c.styleAttr,Db(d,c.classAttr)))},fb=function(){tb="translateZ(0)",g.setStyle(ib,"transform",tb);var a=j(ib),b=a.getPropertyValue("transform"),c=a.getPropertyValue(R+"transform"),d=b&&"none"!==b||c&&"none"!==c;d||(tb="")};g.setStyle=function(a,b,c){var d=a.style;if(b=b.replace(K,L).replace("-",""),"zIndex"===b)d[b]=isNaN(c)?c:""+(0|c);else if("float"===b)d.styleFloat=d.cssFloat=c;else try{Q&&(d[Q+b.slice(0,1).toUpperCase()+b.slice(1)]=c),d[b]=c}catch(e){}};var gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb=g.addEvent=function(b,c,d){var e=function(b){return b=b||a.event,b.target||(b.target=b.srcElement),b.preventDefault||(b.preventDefault=function(){b.returnValue=!1,b.defaultPrevented=!0}),d.call(this,b)};c=c.split(" ");for(var f,g=0,h=c.length;h>g;g++)f=c[g],b.addEventListener?b.addEventListener(f,d,!1):b.attachEvent("on"+f,e),Tb.push({element:b,name:f,listener:d})},wb=g.removeEvent=function(a,b,c){b=b.split(" ");for(var d=0,e=b.length;e>d;d++)a.removeEventListener?a.removeEventListener(b[d],c,!1):a.detachEvent("on"+b[d],c)},xb=function(){for(var a,b=0,c=Tb.length;c>b;b++)a=Tb[b],wb(a.element,a.name,a.listener);Tb=[]},yb=function(a,b,c){jb.keyframe&&jb.keyframe.call(gb,a,b,c)},zb=function(){var a=gb.getScrollTop();Ib=0,kb&&!Rb&&(f.style.height=""),X(),kb&&!Rb&&(f.style.height=Ib+e.clientHeight+"px"),Rb?gb.setScrollTop(i.min(gb.getScrollTop(),Ib)):gb.setScrollTop(a,!0),rb=!0},Ab=function(){var a,b,c=e.clientHeight,d={};for(a in lb)b=lb[a],"function"==typeof b?b=b.call(gb):/p$/.test(b)&&(b=b.slice(0,-1)/100*c),d[a]=b;return d},Bb=function(){var a=ib&&ib.offsetHeight||0,b=i.max(a,f.scrollHeight,f.offsetHeight,e.scrollHeight,e.offsetHeight,e.clientHeight);return b-e.clientHeight},Cb=function(b){var c="className";return a.SVGElement&&b instanceof a.SVGElement&&(b=b[c],c="baseVal"),b[c]},Db=function(b,d,e){var f="className";if(a.SVGElement&&b instanceof a.SVGElement&&(b=b[f],f="baseVal"),e===c)return void(b[f]=d);for(var g=b[f],h=0,i=e.length;i>h;h++)g=Fb(g).replace(Fb(e[h])," ");g=Eb(g);for(var j=0,k=d.length;k>j;j++)-1===Fb(g).indexOf(Fb(d[j]))&&(g+=" "+d[j]);b[f]=Eb(g)},Eb=function(a){return a.replace(G,"")},Fb=function(a){return" "+a+" "},Gb=Date.now||function(){return+new Date},Hb=function(a,b){return a.frame-b.frame},Ib=0,Jb=1,Kb="down",Lb=-1,Mb=Gb(),Nb=0,Ob=0,Pb=!1,Qb=0,Rb=!1,Sb=0,Tb=[];"function"==typeof define&&define.amd?define("skrollr",function(){return g}):"undefined"!=typeof module&&module.exports?module.exports=g:a.skrollr=g}(window,document),function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),function(a){a.viewportSize={},a.viewportSize.getHeight=function(){return b("Height")},a.viewportSize.getWidth=function(){return b("Width")};var b=function(b){var c,d,e,f=b.toLowerCase(),g=a.document,h=g.documentElement;return void 0===a["inner"+b]?c=h["client"+b]:a["inner"+b]!=h["client"+b]?(d=g.createElement("body"),d.id="vpw-test-b",d.style.cssText="overflow:scroll",e=g.createElement("div"),e.id="vpw-test-d",e.style.cssText="position:absolute;top:-1000px",e.innerHTML="<style>@media("+f+":"+h["client"+b]+"px){body#vpw-test-b div#vpw-test-d{"+f+":7px!important}}</style>",d.appendChild(e),h.insertBefore(d,g.head),c=7==e["offset"+b]?h["client"+b]:a["inner"+b],h.removeChild(d)):c=a["inner"+b],c}}(this),$(document).ready(function(){$("h1,h2, #stats h5").each(function(){$(this).html($(this).html().replace(/\s([^\s<]{0,10})\s*$/,"&nbsp;$1"))});var a=3e3,b=500,c=b+a/3,d=c+a,e=d+b,f=e+1.75*a,g=f+b,h=g+.65*a,i=h+b,j=i+a,k=j+b,l=k+a,m=l+b,n=m+a/2,o=n+b,p=o+a,q=p+b,r=q+a,s=r+b,t=s+a;text1of2in=400,text1of2out=1e3,text2of2in=1400,text2of2out=2e3,streetUpperText1In=c+text1of2in,$window=$(window),$slide=$(".homeSlide"),$slideTall=$(".homeSlideTall"),$slideTall2=$(".homeSlideTall2"),$body=$("body");var u=(skrollr.init({render:function(a){console.log(a.curTop),a.curTop>=13570&&$("#circles .circle-1 h1").prop("Counter",0).animate({Counter:2578},{duration:2e3,easing:"swing",step:function(a){$(this).text(Math.ceil(a))}}),a.curTop>=14670&&$("#circles .circle-2 h1 span").prop("Counter",0).animate({Counter:67},{duration:2e3,easing:"swing",step:function(a){$(this).text(Math.ceil(a))}}),a.curTop>=15664&&$("#circles .circle-3 h1 span").prop("Counter",0).animate({Counter:45},{duration:2e3,easing:"swing",step:function(a){$(this).text(Math.ceil(a))}})},constants:{bstreetupper:c,astreetupper:d,bstreetlower:e,astreetlower:f,bbrick:g,abrick:h,btaxi:i,ataxi:j,bskyline:k,askyline:l,bfence:m,afence:n,bbridge:o,abridge:p,bnycave:q,anycave:r,boutro:s,aoutro:t}}),0),v=0;"number"==typeof window.innerWidth?(u=window.innerWidth,v=window.innerHeight):document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?(u=document.documentElement.clientWidth,v=document.documentElement.clientHeight):document.body&&(document.body.clientWidth||document.body.clientHeight)&&(u=document.body.clientWidth,v=document.body.clientHeight),450>=v&&(v=450),$(".triangle-1").css({"border-top":v+"px solid rgba(0, 0, 0, 1)"}),$(".triangle-1").css({"border-right":u+"px solid transparent"}),$(".triangle-2").css({"border-bottom":v+"px solid rgba(0, 0, 0, 1)"}),$(".triangle-2").css({"border-left":u+"px solid transparent"}),$("#intro-scroll").delay(1e3).fadeIn(2e3),$("#intro-title").delay(500).fadeIn(2e3)}),$(window).resize(function(){var a=0,b=0;"number"==typeof window.innerWidth?(a=window.innerWidth,b=window.innerHeight):document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?(a=document.documentElement.clientWidth,b=document.documentElement.clientHeight):document.body&&(document.body.clientWidth||document.body.clientHeight)&&(a=document.body.clientWidth,b=document.body.clientHeight),$(".triangle-1").css({"border-top":b+"px solid rgba(0, 0, 0, 1)"}),$(".triangle-1").css({"border-right":a+"px solid transparent"}),$(".triangle-2").css({"border-bottom":b+"px solid rgba(0, 0, 0, 1)"}),$(".triangle-2").css({"border-left":a+"px solid transparent"})});