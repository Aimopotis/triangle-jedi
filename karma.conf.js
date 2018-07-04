process.env.BABEL_ENV = "test";
const webpackConfig = require('./webpack.config.js');
const fileGlob = './src/**/*.spec.js'


module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [fileGlob],
    webpack: webpackConfig, 
    preprocessors: {
      [fileGlob]: ['webpack']
    },
    webpackMiddleware: {noInfo: true},
    reporters: ['mocha','coverage', 'kjhtml'],
    coverageReporter: {
      reporters: [
        {type: 'lcov', dir: 'coverage/', subdir: '.'},
        {type: 'json', dir: 'coverage/', subdir: '.'},
        {type: 'text-summary'},
      ],
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
  })
}