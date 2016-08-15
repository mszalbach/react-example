var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        files: [
            'src/test/js/*.js'
        ],
        reporters: ['progress'],
        singleRun: true,
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ]

    });
};