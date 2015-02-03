define(['jquery'], function ($) {
    var fn = function (id, dire, s, spdb) {
        var sld = $("." + id),
            spda = 450,
            rolla = sld.find(".sld-a"),
            len = rolla.find(".sld-roll").length,
            stepWidth = s,
            stepHeight = s,
            step = 0,
            animateA,
            animateB;
        sld.append(rolla.clone()).css({
            "display": "block"
        });
        if (dire === "top") {
            animateA = function () {
                step = step + 1;
                stepHeight = s * step;
                sld.animate({
                    scrollTop: stepHeight
                }, spda, 'swing', function () {
                    if (step === len) {
                        step = 0;
                        sld.scrollTop(0);
                    }
                });
            };
            animateB = window.setInterval(animateA, spdb);
        }
        if (dire === "left") {
            animateA = function () {
                step = step + 1;
                stepWidth = s * step;
                sld.animate({
                    scrollLeft: stepWidth
                }, spda, 'swing', function () {
                    if (step === len) {
                        step = 0;
                        sld.scrollLeft(0);
                    }
                });
            };
            animateB = window.setInterval(animateA, spdb);
        }
        sld.on('mouseover', function () {
            clearInterval(animateB);
        });
        sld.on('mouseout', function () {
            animateB = window.setInterval(animateA, spdb);
        });
    };
    return fn;
});
