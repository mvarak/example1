/* Controllers */
define(['angular', 'services'], function (angular) {
    return angular.module('wizardApp.controllers', ['wizardApp.services']).
        controller('MainWizardController', ['$scope', '$state', 'TravelTypeService', 'RiskSportService', 'Data', function ($scope, $state, TravelTypeService, RiskSportService, Data) {

            $scope.wizardSteps = ['form1', 'form2', 'form3'];
            $scope.data = Data;

            $scope.getTravelTypes = function () {
                return TravelTypeService.getList();
            }

            $scope.getRiskSportTypes = function () {
                return RiskSportService.getList();
            }

            $scope.isNextAvailable = function () {
                return $scope.getNextState($state.$current.name) != null;
            }

            $scope.isPrevAvailable = function () {
                return $scope.getPreviousState($state.$current.name) != null;
            }

            $scope.next = function () {
                $scope.$parent.policyHolder = $scope.policyHolder;
                var nextStateName = $scope.getNextState($state.$current.name);
                console.info('State transition to: ' + nextStateName);
                $state.transitionTo(nextStateName);
            }

            $scope.prev = function () {
                var previousStateName = $scope.getPreviousState($state.$current.name);
                console.info('State transition to: ' + previousStateName);
                $state.transitionTo(previousStateName);
            }

            $scope.getNextState = function (stateName) {
                var nextStateName;
                _.each($scope.wizardSteps, function (element, index, list) {
                    if (stateName === element) {
                        if (index < list.length - 1) {
                            nextStateName = list[index + 1];
                        }
                    }
                });
                return nextStateName;
            }

            $scope.getPreviousState = function (stateName) {
                var prevStateName;
                _.each($scope.wizardSteps, function (element, index, list) {
                    if (stateName === element) {
                        if (index > 0) {
                            prevStateName = list[index - 1];
                        }
                    }
                });
                return prevStateName;
            }
        }
        ])
});