(function (define) {
    var fn = function (sld, spdb, w) {
        var $ = fn.$ || jQuery,
            spda = 150,
            data = fn.data,
            step = 0,
            len = data.length,
            animA,
            animB;
        if (data.length === 0) {
            return false;
        }
        sld.html('<a href="' + data[step].link + '" target="_blank">' + data[step].title + '</a>').css({
            "display": "inline-block",
            "width": w + "px"
        });
        step = step + 1;
        animA = function () {
            sld.animate({
                width: 0
            }, spda, 'swing', function () {
                sld.html('<a href="' + data[step].link + '" target="_blank">' + data[step].title + '</a>');
                sld.animate({
                    width: w
                }, spda, 'swing', function () {
                    step = step + 1;
                    if (step === len) {
                        step = 0;
                    }
                });
            });
        };
        animB = window.setInterval(animA, spdb);
        sld.on({
            mouseover: function () {
                clearInterval(animB);
            },
            mouseout: function () {
                animB = window.setInterval(animA, spdb);
            }
        });
    };
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function ($) {
            fn.$ = $;
            return fn;
        });
    } else {
        window.zsldflash = fn;
    }
}(window.define));
