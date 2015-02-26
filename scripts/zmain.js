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
            "jquery": "lib/jquery-1.11.2.min",
            "mod": "./mod",
            "app": "./app"
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
        if ($(".mkr")[0]) {
            loadCss("./css/zmarker.css");
            loadCss("./css/zvtimeline.css");
            require(['mod/zmarker', 'mod/zvtimeline'], function (zmarker, zvtimeline) {
                var msg1 = '{"data":[{"n":"进度1","s":"进度1已完成","t":"2013-01-01","m":"进度1的备注","c":true},{"n":"进度2","s":"进度2已完成","t":"2013-01-01","m":"进度2的备注","c":true},{"n":"进度3","s":"进度3已完成","t":"2013-01-01","m":"进度3的备注","c":true},{"n":"进度4","s":"进度4已完成","t":"2013-01-01","m":"进度4的备注","c":true},{"n":"进度5","s":"进度5进行中","t":"2013-01-01","m":"进度5的备注","c":true},{"n":"进度6","s":"进度6未到","t":"2013-01-01","m":"进度6的备注","c":false},{"n":"进度7","s":"进度7未到","t":"2013-01-01","m":"进度7的备注","c":false},{"n":"进度8","s":"进度8未到","t":"2013-01-01","m":"进度8的备注","c":false},{"n":"进度9","s":"进度9未到","t":"2013-01-01","m":"进度9的备注","c":false}]}',
                    msg2 = '{"data":[{"n":"new进度1","s":"new进度1已完成","t":"2013-01-01","m":"new进度1的备注","c":true},{"n":"new进度2","s":"new进度2已完成","t":"2013-01-01","m":"new进度2的备注","c":true},{"n":"new进度3","s":"new进度3已完成","t":"2013-01-01","m":"new进度3的备注","c":true},{"n":"new进度4","s":"new进度4已完成","t":"2013-01-01","m":"new进度4的备注","c":true},{"n":"new进度5","s":"new进度5进行中","t":"2013-01-01","m":"new进度5的备注","c":true},{"n":"new进度6","s":"new进度6未到","t":"2013-01-01","m":"new进度6的备注","c":false},{"n":"new进度7","s":"new进度7未到","t":"2013-01-01","m":"new进度7的备注","c":false},{"n":"new进度8","s":"new进度8未到","t":"2013-01-01","m":"new进度8的备注","c":false},{"n":"new进度9","s":"new进度9未到","t":"2013-01-01","m":"new进度9的备注","c":false}]}';
                msg1 = $.parseJSON(msg1).data;
                msg2 = $.parseJSON(msg2).data;
                $(".mk1").on("mouseover", function (evt) {
                    zmarker(zvtimeline(msg1), ".mkr-s1", true, evt);
                });
                $(".mk2").on("click", function (evt) {
                    zmarker(zvtimeline(msg2), ".mkr-s1", true, evt);
                });
            });
        }
        if ($(".tl-a")[0]) {
            loadCss("./css/ztimeline.css");
            require(['mod/ztimeline'], function (ztimeline) {
                var data = '{"data":[{"n":"进度1","s":"进度1已完成","t":"2013-01-01","m":"进度1的备注","c":true},{"n":"进度2","s":"进度2已完成","t":"2013-01-01","m":"进度2的备注","c":true},{"n":"进度3","s":"进度3已完成","t":"2013-01-01","m":"进度3的备注","c":true},{"n":"进度4","s":"进度4已完成","t":"2013-01-01","m":"进度4的备注","c":true},{"n":"进度5","s":"进度5进行中","t":"2013-01-01","m":"进度5的备注","c":true},{"n":"进度6","s":"进度6未到","t":"2013-01-01","m":"进度6的备注","c":false},{"n":"进度7","s":"进度7未到","t":"2013-01-01","m":"进度7的备注","c":false},{"n":"进度8","s":"进度8未到","t":"2013-01-01","m":"进度8的备注","c":false},{"n":"进度9","s":"进度9未到","t":"2013-01-01","m":"进度9的备注","c":false}]}';
                data = $.parseJSON(data).data;
                ztimeline(data, $(".tl-a"));
            });
        }
        if ($(".ztree")[0]) {
            loadCss("./css/ztree.css");
            require(['mod/ztree'], function (ztree) {
                var data = '{"expa":[{"name":"注释层","level":1},{"name":"<a href=http://www.sina.com.cn target=_blank>第一层1&ltA&gt链接测试</a>","level":1,"expa":[{"name":"注释层","level":2},{"name":"第二层1","level":2,"expa":[{"name":"第三层1","level":3,"fcs":1},{"name":"第三层2","level":3,"expa":[{"name":"第四层1","level":4,"expa":[{"name":"第五层1","level":5,"expa":[{"name":"第六层1测试换行效果","level":6}]}]}]}]},{"name":"第二层2","level":2}]},{"name":"第一层2","level":1,"hide":1,"expa":[{"name":"第二层3","level":2}]},{"name":"第一层3","level":1}]}';
                data = $.parseJSON(data).expa;
                ztree(data, ".ztree");
            });
        }
    });
}());
