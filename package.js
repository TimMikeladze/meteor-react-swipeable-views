Package.describe({
    name: 'tmikeladze:react-swipeable-views',
    version: '0.0.1',
    summary: 'Wrapper for https://github.com/oliviertassinari/react-swipeable-views',
    git: 'https://github.com/TimMikeladze/meteor-react-swipeable-views',
    documentation: 'README.md'
});

Npm.depends({
    'react-swipeable-views': '0.3.5'
});

Package.onUse(function(api){
    api.use(['cosmos:browserify@0.9.3']);

    api.addFiles([
        'react-swipeable-views.browserify.js'
    ]);

    api.export('SwipeableViews');

});