var Cyan=function(e,t,n){return e.getEvt=function(){var e=t.event||event;return e},e.getObj=function(e){var t=e.srcElement||e.target;return t},e.getElementsByClassName=function(e,t,n){var r=e.getElementsByTagName(t),i=[],s;for(s in r)r[s].className!==undefined&&r[s].className.indexOf(n)!==-1&&i.push(r[s]);return i},e.getCss=function(n,r){var i=null;return n.currentStyle?i=n.currentStyle[r]:t.getComputedStyle&&(i=t.getComputedStyle(n,null).getPropertyValue(r)),i},e.getNextSibling=function(e){try{var t=e.nextSibling;while(t.nodeType!==1)t=t.nextSibling;return t}catch(n){}},e.getPreviousSibling=function(e){try{var t=e.previousSibling;while(t.nodeType!==1)t=t.previousSibling;return t}catch(n){}},e.$$=function(e){return n.getElementById(e)},e.xmlhttp=function(){var e;return t.XMLHttpRequest?e=new XMLHttpRequest:e=new ActiveXObject("Microsoft.XMLHTTP"),e},e.coord=function(e){var t=e.clientX+n.documentElement.scrollLeft,r=e.clientY+n.documentElement.scrollTop;return{X:t,Y:r}},e.pop=function(){var e=n.createElement("div"),t,r,i;e.style.cssText="position:fixed; _position:absolute; opacity:0.1; filter:Alpha(opacity=10); left:1px; top:0; padding:3px 20px; text-align:center; background:#FFFDDD; border:1px solid #F8F3D6; color:#BB861C; font-weight:normal; ",arguments[1]==="warning"&&(e.style.cssText="position:fixed; _position:absolute; opacity:0.1; filter:Alpha(opacity=10); left:1px; top:0; padding:3px 20px; text-align:center; background:#FFDDDD; border:1px solid #FFDDDD; color:#B98181; font-weight:normal; "),n.body.appendChild(e),t=function(){e.style.opacity=parseFloat(e.style.opacity)+.1,e.style.filter="Alpha(opacity="+(parseInt(e.style.filter.slice(14))+5)+")",(parseFloat(e.style.opacity)>3||parseInt(e.style.filter.slice(14))>300)&&r()};try{r()}catch(s){}e.innerHTML=arguments[0],e.style.left=(n.documentElement.clientWidth-e.offsetWidth)/2+"px",r=function(){n.body.removeChild(e),clearInterval(i)},i=setInterval(t,50)},e.cssLoaded=function(e,t){function n(e,t){if(t.isCalled)return;var r=!1;if(/webkit/i.test(navigator.userAgent))e.sheet&&(r=!0);else if(e.sheet)try{e.sheet.cssRules&&(r=!0)}catch(i){i.code===1e3&&(r=!0)}r?setTimeout(function(){t()},1):setTimeout(function(){n(e,t)},1)}e.attachEvent?e.attachEvent("onload",t):setTimeout(function(){n(e,t)},0)},e.date=function(){var e=new Date,t,n=new Array(7);return n[0]="星期日",n[1]="星期一",n[2]="星期二",n[3]="星期三",n[4]="星期四",n[5]="星期五",n[6]="星期六",t=e.getFullYear()+"年"+(e.getMonth()+1)+"月"+e.getDate()+"日 "+n[e.getDay()],t},e.addListener=function(e,t,n){if(n.addEventListener)return n.addEventListener(e,t,!1);if(n.attachEvent)return n.attachEvent("on"+e,t)},e.removeListener=function(e,t,n){if(n.removeEventListener)return n.removeEventListener(e,t,!1);if(n.detachEvent)return n.detachEvent("on"+e,t)},e.stopListener=function(e){return t.event?t.event.cancelBubble=!0:e.stopPropagation()},e}(Cyan||{},window,document);