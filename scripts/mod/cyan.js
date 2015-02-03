var Cyan = (function (C, window, document) {
    C.getEvt = function () {
        var evt = window.event || event;
        return evt;
    };
    C.getObj = function (evt) {
        var e = evt.srcElement || evt.target;
        return e;
    };
    C.getElementsByClassName = function (scope, tagName, str) {
        var items = scope.getElementsByTagName(tagName),
            arr = [],
            i;
        for (i in items) {
            if (items[i].className !== undefined) {
                if (items[i].className.indexOf(str) !== -1) {
                    arr.push(items[i]);
                }
            }
        }
        return arr;
    };
    C.getCss = function getCss(o, s) {
        var gs = null;
        if (o.currentStyle) {
            gs = o.currentStyle[s];
        } else if (window.getComputedStyle) {
            gs = window.getComputedStyle(o, null).getPropertyValue(s);
        }
        return gs;
    };
    C.getNextSibling = function (n) {
        try {
            var x = n.nextSibling;
            while (x.nodeType !== 1) {
                x = x.nextSibling;
            }
            return x;
        } catch (ignore) {}
    };
    C.getPreviousSibling = function (n) {
        try {
            var x = n.previousSibling;
            while (x.nodeType !== 1) {
                x = x.previousSibling;
            }
            return x;
        } catch (ignore) {}
    };
    C.$$ = function (id) {
        return document.getElementById(id);
    };
    C.xmlhttp = function () {
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return xmlhttp;
    };
    C.coord = function (evt) {
        var x = evt.clientX + document.documentElement.scrollLeft,
            y = evt.clientY + document.documentElement.scrollTop;
        return {
            X: x,
            Y: y
        };
    };
    C.pop = function () {
        var pp = document.createElement("div"),
            doPop,
            clearPop,
            setPop;
        pp.style.cssText = "position:fixed; _position:absolute; opacity:0.1; filter:Alpha(opacity=10); left:1px; top:0; padding:3px 20px; text-align:center; background:#FFFDDD; border:1px solid #F8F3D6; color:#BB861C; font-weight:normal; ";
        if (arguments[1] === "warning") {
            pp.style.cssText = "position:fixed; _position:absolute; opacity:0.1; filter:Alpha(opacity=10); left:1px; top:0; padding:3px 20px; text-align:center; background:#FFDDDD; border:1px solid #FFDDDD; color:#B98181; font-weight:normal; ";
        }
        document.body.appendChild(pp);
        doPop = function () {
            pp.style.opacity = parseFloat(pp.style.opacity) + 0.1;
            pp.style.filter = "Alpha(opacity=" + (parseInt(pp.style.filter.slice(14)) + 5) + ")";
            if (parseFloat(pp.style.opacity) > 3 || parseInt(pp.style.filter.slice(14)) > 300) {
                clearPop();
            }
        };
        try {
            clearPop();
        } catch (ignore) {}
        pp.innerHTML = arguments[0];
        pp.style.left = (document.documentElement.clientWidth - pp.offsetWidth) / 2 + "px";
        clearPop = function () {
            document.body.removeChild(pp);
            clearInterval(setPop);
        };
        setPop = setInterval(doPop, 50);
    };
    C.cssLoaded = function (node, callback) {
        if (node.attachEvent) {
            node.attachEvent('onload', callback);
        } else {
            setTimeout(function () {
                poll(node, callback);
            }, 0);
        }

        function poll(node, callback) {
            if (callback.isCalled) {
                return;
            }
            var isLoaded = false;
            if (/webkit/i.test(navigator.userAgent)) {
                if (node['sheet']) {
                    isLoaded = true;
                }
            } else if (node['sheet']) {
                try {
                    if (node['sheet'].cssRules) {
                        isLoaded = true;
                    }
                } catch (ex) {
                    if (ex.code === 1000) {
                        isLoaded = true;
                    }
                }
            }
            if (isLoaded) {
                setTimeout(function () {
                    callback();
                }, 1);
            } else {
                setTimeout(function () {
                    poll(node, callback);
                }, 1);
            }
        }
    };
    C.date = function () {
        var d = new Date(),
            dt,
            wd = new Array(7);
        wd[0] = "星期日";
        wd[1] = "星期一";
        wd[2] = "星期二";
        wd[3] = "星期三";
        wd[4] = "星期四";
        wd[5] = "星期五";
        wd[6] = "星期六";
        dt = d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日 " + wd[d.getDay()];
        return dt;
    };
    C.addListener = function (eventFlag, eventFunc, obj) {
        if (obj.addEventListener) {
            return obj.addEventListener(eventFlag, eventFunc, false);
        }
        if (obj.attachEvent) {
            return obj.attachEvent("on" + eventFlag, eventFunc);
        }
    };
    C.removeListener = function (eventFlag, eventFunc, obj) {
        if (obj.removeEventListener) {
            return obj.removeEventListener(eventFlag, eventFunc, false);
        }
        if (obj.detachEvent) {
            return obj.detachEvent("on" + eventFlag, eventFunc);
        }
    };
    C.stopListener = function (event) {
        if (!window.event) {
            return event.stopPropagation();
        } else {
            return window.event.cancelBubble = true;
        }
    };
    return C;
}(Cyan || {}, window, document));
