({
    appDir: './',
    baseUrl: './scripts',
    dir: './build',
    paths: {
        "cyan": "mod/cyan",
        "jquery": "lib/jquery/jquery-1.11.2.min",
        "zslide": "mod/zslide",
        "zsldflash": "mod/zsldflash",
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
