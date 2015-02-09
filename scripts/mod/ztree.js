define(['jquery'], function ($) {
    var fn = function (data, el) {
        var htmStr = "",
            $tree = $(el),
            setTree,
            flodTree;
        setTree = function (expaDt) {
            var len = expaDt.length,
                i,
                d,
                ico,
                itm,
                level = 20;
            for (i = 0; len > i; i = i + 1) {
                if (expaDt[i].expa) {
                    ico = "ztree-ico1";
                } else {
                    ico = "ztree-ico2";
                }
                if (expaDt[i].hide) {
                    ico = "ztree-ico0";
                }
                if (expaDt[i].fcs) {
                    itm = 'class="ztree-itm ztree-fcs" style="padding-left:' + level * expaDt[i].level + 'px"';
                } else {
                    if (expaDt[i].comm) {
                        itm = 'class="ztree-itm ztree-comm" style="padding-left:' + level * expaDt[i].level + 'px"';
                        ico = "ztree-ico3";
                    } else {
                        itm = 'class="ztree-itm" style="padding-left:' + level * expaDt[i].level + 'px"';
                    }
                }
                htmStr = htmStr + '<div ' + itm + '"><span class="ztree-r">' + (expaDt[i].right || "") + '</span><span class="' + ico + '"></span><span class="ztree-tt">' + expaDt[i].name + '</span></div>';
                if (expaDt[i].expa) {
                    d = expaDt[i].expa;
                    if (expaDt[i].hide) {
                        htmStr = htmStr + '<div class="ztree-expa" style="display:none">';
                    } else {
                        htmStr = htmStr + '<div class="ztree-expa">';
                    }
                    setTree(d);
                }
            }
            htmStr = htmStr + '</div>';
        };
        setTree(data);
        $tree.html(htmStr);
        flodTree = function (obj) {
            if ($(obj).hasClass("ztree-ico0")) {
                obj.className = "ztree-ico1";
                $(obj).parent().next().slideDown("fast");
            } else {
                obj.className = "ztree-ico0";
                $(obj).parent().next().slideUp("fast");
            }
        };
        $tree.find(".ztree-ico0, .ztree-ico1").on("click", function () {
            flodTree(this);
        });
        $tree.find(".ztree-itm").on({
            click: function () {
                $(".ztree-fcs").removeClass("ztree-fcs");
                $(this).addClass("ztree-fcs");
            },
            dblclick: function () {
                var obj = $(this).find(".ztree-ico0")[0] || $(this).find(".ztree-ico1")[0];
                if (obj) {
                    flodTree(obj);
                }
            },
            mousedown: function () {
                $(this).css("user-select", "none");
            }
        });
    };
    return fn;
});
