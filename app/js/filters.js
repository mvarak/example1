/* Filters */
define(['angular', 'services'], function (angular, services) {
    'use strict';
    angular.module('wizardApp.filters', []).
        filter('interpolate', ['version', function (version) {
            return function (text) {
                return String(text).replace(/\%VERSION\%/mg, version);
            }
        }]).
        filter('riskSportType', ['RiskSportService', function (RiskSportService) {
            return function (text) {
                if (text != undefined) {
                    var riskSport = RiskSportService.getById(text);
                    if (riskSport != null) {
                        return riskSport.name;
                    } else {
                        return text + '-?';
                    }

                } else {
                    return text;
                }
            }
        }])
        .filter('travelType', ['TravelTypeService', function (TravelTypeService) {
            return function (text) {
                if (text != undefined) {
                    var travelType = TravelTypeService.getById(text);
                    if (travelType != null) {
                        return travelType.name;
                    } else {
                        return text + '-?';
                    }

                } else {
                    return text;
                }
            }
        }]);
    ;
})

