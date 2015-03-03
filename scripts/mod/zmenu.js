(function (define) {
    var fn = function () {
        var $ = fn.$ || jQuery;
        $(document).on("mouseover.menu", function (evt) {
            var $obj = $(evt.target);
            if ($obj.hasClass("nav-menu")) {
                $(".nav-menu").removeClass("fcs");
                $(".nav-mn").css("display", "none");
                $obj.next().css("display", "block");
                $obj.addClass("fcs");
            } else {
                if ($obj.parents(".nav-mn")[0]) {
                    return false;
                }
                $(".nav-mn").css("display", "none");
                $(".nav-menu").removeClass("fcs");
            }
        });
        $(".nav-mn .a1").on("click.menu", function (evt) {
            var $obj = $(evt.target);
            if ($obj.next().hasClass("nav-smn")) {
                evt.preventDefault();
                if ($obj.next().is(":hidden")) {
                    $(".nav-smn").css("display", "none");
                    $obj.next().css("display", "block");
                } else {
                    $(".nav-smn").css("display", "none");
                }
            }
        });
    };
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function ($) {
            fn.$ = $;
            return fn;
        });
    } else {
        window.zmenu = fn;
    }
}(window.define));
