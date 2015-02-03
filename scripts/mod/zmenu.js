define(['jquery'], function ($) {
    var fn = function () {
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
    return fn();
});
