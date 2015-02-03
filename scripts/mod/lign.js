(function () {
    var wrap = $(".wrap"),
        win = $(window);
    var _IE = (function () {
        var v = 3,
            div = document.createElement('div'),
            all = div.getElementsByTagName('i');
        while (
            div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
            all[0]
        );
        return v > 4 ? v : false;
    }());

    if ($(".menu-icon")) {
        var menuIcon = $(".menu-icon"),
            menuIconI3 = menuIcon.find(".i3"),
            mirt, mitp, setMenuIcon, setFltLy,
            fltLy = $(".flt-ly"),
            fltLyClose = fltLy.find(".flt-ly-c"),
            fltLyCt = $(".flt-ly-ct"),
            fltLyCt1 = $(".flt-ly-ct1"),
            fltLyV1 = $(".flt-ly-v1"),
            fltLyV2 = $(".flt-ly-v2"),
            relay1 = fltLyV1.find(".a1").eq(0),
            goBack = fltLyV2.find(".a1").eq(0);
        setMenuIcon = function () {
            mirt = (win.outerWidth() - wrap.outerWidth()) / 2 - 30;
            mitp = win.outerHeight() / 2 - 48;
            if (mirt < 0) {
                menuIcon.css("right", 2);
            } else {
                menuIcon.css("right", mirt);
            }
            menuIcon.css("top", mitp);
        }
        setMenuIcon();
        menuIcon.mouseover(function () {
            $(this).fadeTo("fast", 1);
        })
        menuIcon.mouseout(function () {
            $(this).fadeTo("fast", 0.6);
        });

        setFltLy = function (key) {
            fltLy.css("display", "block");
            if (_IE != 6) {
                fltLy.animate({
                    "opacity": 1,
                    "top": (win.outerHeight() - fltLy.outerHeight()) / 2,
                    "left": (win.outerWidth() - fltLy.outerWidth()) / 2
                });
            } else {
                fltLy.animate({
                    "opacity": 1,
                    "top": (win.outerHeight() - fltLy.outerHeight()) / 2 + win.scrollTop(),
                    "left": (win.outerWidth() - fltLy.outerWidth()) / 2 + win.scrollLeft()
                });

            }
        }

        setFlyCt = function () {
            fltLyCt.css("display", "block");
            fltLyCt1.css("display", "none");
            fltLyV1.css("display", "block");
            fltLyV2.css("display", "none");
        }

        menuIconI3.click(function () {
            setFltLy();
        });

        fltLyClose.click(function () {
            fltLy.animate({
                "top": 0,
                "opacity": 0
            }, function () {
                fltLy.css("display", "none");
                setFlyCt();
            });
        })

        relay1.click(function () {
            fltLyCt.css("display", "none");
            fltLyCt1.css("display", "block");
            fltLyV1.css("display", "none");
            fltLyV2.css("display", "block");

        })

        goBack.click(function () {
            setFlyCt();
        })

        win.resize(function () {
            setMenuIcon();
            if (fltLy[0].style.display == "block") {
                setFltLy();
            }
        })

        if (_IE == 6) {
            win.scroll(function () {
                menuIcon.css("top", win.outerHeight() / 2 + win.scrollTop() - 30);
                if (fltLy[0].style.display == "block") {
                    fltLy.css("top", (win.outerHeight() - fltLy.outerHeight()) / 2 + win.scrollTop())
                }
            })
        }
    }
}())
