(function (define) {
    var fn = function (data) {
        var $ = fn.$ || jQuery,
            htmStr = "",
            i,
            len = data.length;
        for (i = 0; len > i; i = i + 1) {
            if (i !== len - 1) {
                htmStr = htmStr + '<li class="vtl-itm1"><span class="vtl-s">' + data[i].s + '</span></span><span class="vtl-t">' + data[i].t + '</span><span class="vtl-n">' + data[i].n + '</span><div class="vtl-m">' + data[i].m + "</div></li>";
            } else {
                htmStr = htmStr + '<li class="vtl-itm2"><span class="vtl-s">' + data[i].s + '</span></span><span class="vtl-t">' + data[i].t + '</span><span class="vtl-n">' + data[i].n + '</span><div class="vtl-m">' + data[i].m + "</div></li>";
            }
        }
        htmStr = '<ul class="vtl">' + htmStr + "</ul>";
        return htmStr;
    };
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function ($) {
            fn.$ = $;
            return fn;
        });
    } else {
        window.zmarker = fn;
    }
}(window.define));
