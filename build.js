({
    appDir: './',
    baseUrl: './scripts',
    dir: './build',
    paths: {
        "jquery": "lib/jquery/jquery-1.11.2.min",
        "zslide": "mod/zslide",
        "zslide-flash": "mod/zslide-flash",
        "zdashboard": "mod/zdashboard",
        "zmarker": "mod/zmarker",
        "zvtimeline": "mod/zvtimeline",
        "ztimeline": "mod/ztimeline",
        "ztree": "mod/ztree"
    },
    modules: [{
        name: 'main'
    }],
    fileExclusionRegExp: /^(r|build)\.js$|^.git|^Source|^README\.md|^CNAME/,
    optimizeCss: 'standard',
    removeCombined: true
})
