(function () {
    var loadCss = function (url) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    };
    require.config({
        baseUrl: "./scripts",
        paths: {
            "jquery": "lib/jquery-1.11.2.min"
        }
    });
    require(['jquery'], function ($) {
        $.noConflict(true);
        if ($(".sld")[0]) {
            loadCss("./css/zslide.css");
            require(['mod/zslide'], function (zslide) {
                var source = 'http://platform.sina.com.cn/slide/album',
                    jqXHR = $.ajax({
                        async: true,
                        url: source,
                        dataType: "jsonp",
                        jsonpCallback: "jcb",
                        data: {
                            "app_key": "3656193992",
                            "jsoncallback": "jcb",
                            "format": "json",
                            "ch_id": "1",
                            "num": "10",
                            "size": "img",
                            "sub_ch": "y"
                        }
                    });
                jqXHR.done(function (json) {
                    zslide.data = json.data;
                    zslide($(".sld"), 3000);
                });
            });
        }
        if ($(".sldflash")[0]) {
            loadCss("./css/zslide-flash.css");
            require(['mod/zslide-flash'], function (zsldflash) {
                var source = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fcnbeta.feedsportal.com%2Fc%2F34306%2Ff%2F624776%2Findex.rss'&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",
                    jqXHR = $.ajax({
                        async: true,
                        url: source,
                        dataType: "json"
                    });
                jqXHR.done(function (json) {
                    zsldflash.data = json.query.results.item;
                    zsldflash($(".sldflash"), 2500);
                });
            });
        }
        if ($(".sldflash")[0]) {
            loadCss("./css/zdashboard.css");
            require(['mod/zdashboard'], function (zdashboard) {
                zdashboard();
            });
        }
        if ($(".mk1")[0]) {
            loadCss("./css/zmarker.css");
            require(['mod/zmarker', 'mod/zvtimeline'], function (zmarker, zvtimeline) {
                var msg1 = '{"db":[{"n":"金萍萍2","s":"已初审2","t":"2013-01-01","m":"项目的备注项目的备<br>注项目的备注项目的备注项目的备注","c":true},{"n":"金萍萍2","s":"已初审2","t":"2013-01-01","m":"项目的备注","c":true},{"n":"金萍萍3","s":"已初审3","t":"2013-01-01","m":"项目的备注","c":false},{"n":"金萍萍3","s":"已初审3","t":"2013-01-01","m":"项目的备注","c":false},{"n":"金萍萍3","s":"已初审3","t":"2013-01-01","m":"项目的备注","c":false},{"n":"金萍萍3","s":"已初审3","t":"2013-01-01","m":"项目的备注","c":false},{"n":"金萍萍3","s":"已初审3","t":"2013-01-01","m":"项目的备注","c":false}]}',
                    msg2 = '{"db":[{"n":"金萍","s":"已初审2","t":"2013-01-01","m":"项目的备注项目的备<br>注项目的备注项目的备注项目的备注","c":true},{"n":"金萍萍2","s":"已初审2","t":"2013-01-01","m":"项目的备注","c":true},{"n":"金萍萍3","s":"已初审3","t":"2013-01-01","m":"项目的备注","c":false},{"n":"金萍萍3","s":"已初审3","t":"2013-01-01","m":"项目的备注","c":false},{"n":"金萍萍3","s":"已初审3","t":"2013-01-01","m":"项目的备注","c":false}]}';
                $(".mk1").on("mouseover", function (evt) {
                    zmarker(zvtimeline(msg1), ".mkr-s1", true, evt);
                });
                $(".mk2").on("click", function (evt) {
                    zmarker(zvtimeline(msg2), ".mkr-s1", true, evt);
                });
            });
        }
        if ($(".ztree")[0]) {
            loadCss("./css/ztree.css");
            require(['mod/ztree'], function (ztree) {
                var data = '{"expa":[{"name":"注释层","level":1},{"name":"<a href=http://www.sina.com.cn target=_blank>第一层1&ltA&gt链接测试</a>","level":1,"expa":[{"name":"注释层","level":2},{"name":"第二层1","level":2,"expa":[{"name":"第三层1","level":3,"fcs":1},{"name":"第三层2","level":3,"expa":[{"name":"第四层1","level":4,"expa":[{"name":"第五层1","level":5,"expa":[{"name":"第六层1测试换行效果","level":6}]}]}]}]},{"name":"第二层2","level":2}]},{"name":"第一层2","level":1,"hide":1,"expa":[{"name":"第二层3","level":2}]},{"name":"第一层3","level":1}]}';
                ztree(data, ".ztree");
            });
        }
    });
}());
