(function(e){var t=function(e,n,r,i){var s=t.$||jQuery,o=s("."+e),u=450,a=o.find(".sld-a"),f=a.find(".sld-roll").length,l=r,c=r,h=0,p,d;o.append(a.clone()).css({display:"block"}),n==="top"&&(p=function(){h+=1,c=r*h,o.animate({scrollTop:c},u,"swing",function(){h===f&&(h=0,o.scrollTop(0))})},d=window.setInterval(p,i)),n==="left"&&(p=function(){h+=1,l=r*h,o.animate({scrollLeft:l},u,"swing",function(){h===f&&(h=0,o.scrollLeft(0))})},d=window.setInterval(p,i)),o.on("mouseover",function(){clearInterval(d)}),o.on("mouseout",function(){d=window.setInterval(p,i)})};typeof e=="function"&&e.amd?e(["jquery"],function(e){return t.$=e,t}):window.zslddire=t})(window.define);