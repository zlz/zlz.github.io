define(['jquery'], function ($) {
    var fn = function (msg, mkr, mov, objEvt) {
        var $win = $(window),
            $doc = $(document),
            $obj = $(objEvt.currentTarget),
            $mk,
            mStart,
            mMove;
        mStart = function () {
            var mpos = [],
                mw,
                mh,
                ot = $obj.offset().top,
                ol = $obj.offset().left,
                ow = $obj.outerWidth(),
                oh = $obj.outerHeight(),
                ww = $win.width(),
                wh = $win.height();
            $(".mk").remove();
            $("body").append('<div class="mk ' + mkr.substr(1) + '"><div class="mkr-bg"></div><div class="mkr-ct">' + msg + '</div></div>');
            $mk = $(".mk");
            $(".mkr-bg").width($mk.outerWidth()).height($mk.outerHeight());
            mw = $mk.outerWidth();
            mh = $mk.outerHeight();
            mpos = [ot + oh, ol + ow, ot + oh + mh - $doc.scrollTop(), ol + ow + mw - $doc.scrollLeft()];
            if (mpos[3] > ww) {
                mpos[1] = ol - mw;
            }
            if (mpos[2] > wh) {
                mpos[0] = ot - mh;
            }
            $mk.css({
                "top": mpos[0],
                "left": mpos[1]
            });
            if (mov) {
                mMove();
            }
        };
        fn.mEnd = function () {
            $doc.off("click.mk");
            document.body.style.MozUserSelect = "-moz-all";
            document.body.onselectstart = function () {
                return true;
            };
            document.body.ondragstart = function () {
                return true;
            };
            $(".mk").remove();
        };
        mMove = function () {
            document.body.style.MozUserSelect = "none";
            document.body.onselectstart = function () {
                return false;
            };
            document.body.ondragstart = function () {
                return false;
            };
            $mk.css("cursor", "move").on("mousedown", function () {
                $doc.on("mousemove.mk", function (evt) {
                    $mk.css({
                        "top": evt.pageY - 20,
                        "left": evt.pageX - 20
                    });
                });
                $(this).on("mouseup.mk", function () {
                    $doc.off("mousemove.mk");
                    $(this).off("mouseup.mk");
                });
            });
        };
        if (objEvt.type === "click") {
            $doc.off("click.mk").on("click.mk", function (evt) {
                //evt.preventDefault();
                if (evt.target === $obj[0]) {
                    mStart();
                } else {
                    if ($(evt.target)[0] === $(".msend")[0]) {
                        evt.preventDefault();
                        if (typeof fn.todo === 'function') {
                            fn.todo();
                        }
                        fn.mEnd();
                    } else if ($(evt.target)[0] === $(".mend")[0]) {
                        evt.preventDefault();
                        fn.mEnd();
                    } else {
                        if ($(evt.target).parents(".mk")[0] !== undefined || $(evt.target)[0] === $(".mk")[0]) {
                            return;
                        }
                        fn.mEnd();
                    }
                }
            });
        }
        if (objEvt.type === "mouseover") {
            mStart();
            $(objEvt.currentTarget).on("mouseout", function () {
                fn.mEnd();
            });
        }
    };
    return fn;
});
