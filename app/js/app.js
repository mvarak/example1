'use strict';

// Declare app level module which depends on filters, and services
define(['angular', 'angularRoute', 'uiRouter', 'filters', 'services', 'directives', 'controllers'], function (angular, angularRoute, uiRouter, filters, services, directives, controllers) {

    return angular.module('wizardApp', [
        'ngRoute',
        'ui.router',
        'wizardApp.filters',
        'wizardApp.services',
        'wizardApp.directives',
        'wizardApp.controllers'
    ])
});