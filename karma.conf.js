module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        files: [
            {pattern: 'src/test/js/**/*Spec.jsx', watched: false}
        ],
        preprocessors: {
            'src/test/js/**/*Spec.jsx': ['webpack']
        },
        webpack: {},

        reporters: ['progress'],
        singleRun: true,

    });
};