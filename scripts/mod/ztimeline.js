(function (define) {
    var fn = function (data, $e) {
        var $ = fn.$ || jQuery,
            $body = $('body'),
            len = data.length,
            $clone;
        (function () {
            var i,
                step = (($e.width() - 120) / (len - 1)) < 120 ? 120 : (($e.width() - 120) / (len - 1)),
                lineWidth,
                lineLeft,
                htmStr;
            for (i = 0; i < len; i = i + 1) {
                lineWidth = i === 0 ? 0 : step;
                lineLeft = step * i - step + 60;
                if (data[i].c) {
                    htmStr = '<div class="tl-cb" style="left:' + step * i + 'px"><div class="tl-sb">' + data[i].s + '</div><div class="tl-tb">' + data[i].t + '</div><div class="tl-mb">' + data[i].m + '</div><div class="tl-i">' + data[i].s + '<br>' + data[i].t + '<br>' + data[i].n + '<br>' + data[i].m + '</div></div><div class="tl-lb" style="width:' + lineWidth + 'px; left:' + lineLeft + 'px"></div>';
                } else {
                    htmStr = '<div class="tl-cg" style="left:' + step * i + 'px"><div class="tl-sg">' + data[i].s + '</div><div class="tl-tg">' + data[i].t + '</div><div class="tl-mg">' + data[i].m + '</div><div class="tl-i">' + data[i].s + '<br>' + data[i].t + '<br>' + data[i].n + '<br>' + data[i].m + '</div></div><div class="tl-lg" style="width:' + lineWidth + 'px; left:' + lineLeft + 'px"></div>';
                }
                $e.append(htmStr);
            }
            $(".tl-cb,.tl-cg").hover(function () {
                $clone = $(this).find(".tl-i").clone();
                $clone.css({
                    "position": "absolute",
                    "top": $(this).offset().top + 110,
                    "left": $(this).offset().left + 8,
                    "display": "block"
                });
                $body.append($clone);
            }, function () {
                $clone.remove();
            });
        }());
    };
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function ($) {
            fn.$ = $;
            return fn;
        });
    } else {
        window.ztimeline = fn;
    }
}(window.define));
