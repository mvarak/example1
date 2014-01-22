// we get all the test files automatically
var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/spec\.js$/i.test(file)) {
			tests.push(file);
		}
	}
}

require.config({
	paths: {
		  
        angular: '/base/bower_components/angular/angular',
		    angularRoute: '/base/bower_components/angular-route/angular-route', 
        angularMocks: '/base/bower_components/angular-mocks/angular-mocks', 
        uiRouter: '/base/bower_components/angular-ui-router/angular-ui-router',
        bootstrap: '/base/bower_components/bootstrap/dist/js/bootstrap.min',
        jquery: '/base/bower_components/jquery/jquery',
        Underscore : '/base/bower_components/underscore/underscore-min',
        jqueryUi: '/base/bower_components/jquery-ui/ui/jquery-ui'
	},
	baseUrl: '/base/app/js',
	shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'uiRouter': ['angular'],
        'bootstrap' : ['jquery'],
        jqueryUi: ['jquery'],
        'angularMocks': {
		    	deps:['angular'],
			       'exports':'angular.mock' 
		    },
        Underscore: {
            exports: '_'
        }
    },
	deps: tests,
	callback: window.__karma__.start
});
