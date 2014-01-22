require.config({
    paths: {
        angular: 'http://code.angularjs.org/1.2.9/angular',
        angularRoute: 'http://code.angularjs.org/1.2.9/angular-route',
        uiRouter: 'http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.0/angular-ui-router',
        bootstrap: 'http:////netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min',
        jquery: 'http://code.jquery.com/jquery-1.10.2',
        Underscore : 'http:////cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min',
        jqueryUi: 'http://code.jquery.com/ui/1.10.4/jquery-ui'

    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'uiRouter': ['angular'],
        'bootstrap' : ['jquery'],
        jqueryUi: ['jquery'],
        Underscore: {
            exports: '_'
        }
    },
    priority: [
        "angular"
    ]
});

window.name = "NG_DEFER_BOOTSTRAP!";

require( [
    'angular',
    'app',
    'routes',
    'bootstrap',
    'Underscore',
    'jqueryUi'
], function(angular, app, routes, bootstrap, _, jqueryUi) {
    'use strict';
    var $html = angular.element(document.getElementsByTagName('html')[0]).ready(function() {
        angular.resumeBootstrap(["wizardApp"]);
    });
});