define(['angular', 'app', 'controllers'], function (angular, app, controllers) {
    'use strict';
    return app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {


        var defaultState = {
            url: '',
            name: 'home',
            abstract: true,
            controller: 'MainWizardController',

            views: {
                '' : {
                    templateUrl: 'partials/main.html'
                },
                'navigation' : {
                    templateUrl: 'partials/navbar.html'
                },
                'pager' : {
                    templateUrl: 'partials/pager.html',
                    controller: 'MainWizardController'
                }
            }
        }

        var form1State = {
            url: '/form1',
            name: 'form1',
            parent: defaultState,
            controller: 'MainWizardController',
            templateUrl: 'partials/form1.html'

        }

        var form2State = {
            url: '/form2',
            name: 'form2',
            parent: defaultState,
            controller: 'MainWizardController',
            templateUrl: 'partials/form2.html',
            onEnter : function() {


            }
        }

        var form3State = {
            url: '/form3',
            name: 'form3',
            parent: defaultState,
            controller: 'MainWizardController',
            templateUrl: 'partials/form3.html'
        }

        $stateProvider
            .state(defaultState)
            .state(form1State)
            .state(form2State)
            .state(form3State);

        $urlRouterProvider.otherwise('/form1');

    }]).run(function ($rootScope, $state, $stateParams) {
        $rootScope.state = $state;
        $rootScope.stateParams = $stateParams;
    });
});