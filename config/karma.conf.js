module.exports = function(config){
    config.set({
    basePath : '../',

    files: [
      'node_modules/karma-requirejs/lib/require.js',
      'node_modules/karma-requirejs/lib/adapter.js',
			{pattern: 'app/js/*.js', included: false},
			{pattern: 'app/js/**/*.js', included: false},
			{pattern: 'test/unit.js', included: false},
			{pattern: 'test/unit/*.js', included: false},
			{pattern: 'test/unit/**/*.js', included: false},
			{pattern: 'bower_components/**/*.js', included: false},
			// needs to be last http://karma-runner.github.io/0.10/plus/requirejs.html
			'test/main-test.js'
	], 

    exclude : [
      'app/lib/angular/angular-loader.js',
      'app/lib/angular/*.min.js',
      'app/lib/angular/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})};