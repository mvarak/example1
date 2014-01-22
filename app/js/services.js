/* Services */
define(['angular'], function (angular) {
    'use strict';
    // Demonstrate how to register services
    // In this case it is a simple value service.
    angular.module('wizardApp.services', []).
        value('version', '0.1')
        .factory('Data', function () {
            return {
                policyHolder: {},
                other: {}
            }
        })
        .factory('TravelTypeService', function () {
            return {

                travelTypes: [
                    { id: 'M', name: 'K moru'},
                    { id: 'H', name: 'Horska turistika'},
                    { id: 'RS', name: 'Rizikove športy'},
                    { id: 'B', name: 'Business cesta'}
                ],


                getList: function () {
                    return this.travelTypes;
                },
//
                getById: function (carTypeId) {
                    var ttTypes = this.travelTypes;
                    var carType = null;

                    ttTypes.forEach(function(obj) {
                        if (obj.id === carTypeId) {
                            carType = obj;
                        }
                    })
                    return carType;
                }


            }
        })
        .factory('RiskSportService', function () {
            return {

                riskSportTypes: [
                    { id: 1, name: 'Bunjee'},
                    { id: 2, name: 'Hĺbkové potápanie'},
                    { id: 3, name: 'Skydive'},
                    { id: 4, name: 'G-slalom'}
                ],


                getList: function () {
                    return this.riskSportTypes;
                },
//
                getById: function (riskSportType) {
                    var rsTypes = this.riskSportTypes;
                    var riskSport = null;

                    rsTypes.forEach(function(obj) {
                        if (obj.id == riskSportType) {
                            riskSport = obj;
                        }
                    });

                    return riskSport;
                }


            }
        });
});