/*global describe beforeEach it expect */

define([
    'angular',
    'uiRouter',
    'angularMocks',
    'app',
    'Underscore'
], function (angular, uiRouter, mocks, app, _) {
    'use strict';

    describe('WizardController test', function () {
        var ctrl, scope, state;

        beforeEach(module('wizardApp.controllers'));
        beforeEach(module('ui.router'));

        beforeEach(inject(function ($state) {
            var state = $state;
        }));

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('MainWizardController', {$scope: scope, $state: state});
        }));

        it('text controller navigation', function () {
            // test state navigation
            expect(scope.getNextState('form1')).toBe('form2');
            expect(scope.getNextState('form2')).toBe('form3');
            expect(scope.getPreviousState('form2')).toBe('form1');
        });

        it('text service calls', function () {
            // test services call
            expect(scope.getTravelTypes().length).toBeGreaterThan(0);
            expect(scope.getRiskSportTypes().length).toBeGreaterThan(0);
        });
    });


});