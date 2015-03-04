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
    }, {
        name: 'cyan'
    }, {
        name: 'zslide',
        exclude: ['jquery']
    }, {
        name: 'zsldflash',
        exclude: ['jquery']
    }, {
        name: 'zdashboard',
        exclude: ['jquery']
    }, {
        name: 'zmarker',
        exclude: ['jquery']
    }, {
        name: 'zvtimeline',
        exclude: ['jquery']
    }, {
        name: 'ztimeline',
        exclude: ['jquery']
    }, {
        name: 'ztree',
        exclude: ['jquery']
    }],
    fileExclusionRegExp: /^(r|build)\.js$|^\.git|^Source|^README\.md|^CNAME/,
    optimizeCss: 'standard',
    removeCombined: true
})
