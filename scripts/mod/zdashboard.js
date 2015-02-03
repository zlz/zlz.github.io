define(['jquery'], function ($) {
    var fn = function () {
        var $doc = $(document),
            existEl = function (evt, elCn) {
                if ($(evt.target).parents(elCn)[0] !== undefined) {
                    return $(evt.target).parents(elCn).eq(0);
                }
                if ($(evt.target)[0] === $(elCn)[0]) {
                    return $(evt.target);
                }
            };

        $(".dly").bind("mousedown", function (evt) {
            var currObj = $(evt.target),
                a1Val,
                dlyI1 = existEl(evt, ".dly-i1"),
                i3 = $('<span class="dly-i1 i3"><span class="dly-t"></span></span>'),
                dlyI2 = existEl(evt, ".dly-i2"),
                slctVal;
            evt.preventDefault();
            if (currObj[0].className === "a1") {
                a1Val = currObj.prev().text();
                $(".dly-itm2 .dly-slct").each(function () {
                    if ($(this).text() === a1Val) {
                        $(this).removeClass("dly-slct");
                    }
                });
                currObj.parent().remove();
            }
            if (dlyI1) {
                dlyI1.css({
                    "position": "absolute",
                    "z-index": 1000,
                    "top": evt.pageY + 10,
                    "left": evt.pageX
                });
                i3.insertBefore(dlyI1);
                $doc.bind("mousemove", function (evt) {
                    dlyI1.css({
                        "position": "absolute",
                        "z-index": 1000,
                        "top": evt.pageY + 10,
                        "left": evt.pageX
                    });
                });
                $doc.bind("mouseup", function () {
                    $doc.unbind("mousemove");
                    $doc.unbind("mouseup");
                    $(".dly-i1").unbind("mouseover");
                    dlyI1.css({
                        "position": "relative",
                        "z-index": 0,
                        "top": 0,
                        "left": 0
                    });
                    dlyI1.insertBefore(i3);
                    i3.remove();
                });
                $(".dly-i1").bind("mouseover", function () {
                    i3.insertBefore($(this));
                });
            }
            if (dlyI2) {
                if (dlyI2.hasClass("dly-slct")) {
                    slctVal = dlyI2.find(".dly-t").text();
                    dlyI2.removeClass("dly-slct");
                    $(".dly-itm1 .dly-t").each(function () {
                        if ($(this).text() === slctVal) {
                            $(this).parent().remove();
                        }
                    });
                } else {
                    dlyI2.addClass("dly-slct");
                    $(".dly-li").append('<span class="dly-i1"><span class="dly-t">' + dlyI2.text() + '</span><a href="#" class="a1"></a></span>');
                }
            }
        });
    };
    return fn;
});
