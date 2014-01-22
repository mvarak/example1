/* Directives */

define(['angular', 'services', 'jquery', 'jqueryUi'], function (angular, services, jquery, jqueryUi) {
    'use strict';


    angular.module('wizardApp.directives', ['wizardApp.services'])
        .directive('appVersion', ['version', function (version) {
            return function (scope, elm, attrs) {
                elm.text(version);
            };
        }])
        .directive('jqDate', function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, element, attrs, ngModelCtrl) {
                    jquery(function ($) {
                        $(element).datepicker({
                            dateFormat: 'dd/mm/yy',
                            onSelect:function (date) {
                                scope.$apply(function () {
                                    ngModelCtrl.$setViewValue(date);
                                });
                            },
                            changeYear: true,
                            yearRange: '-100:+0'
                        });

                    });
                }
            }
        });
});