/**
 * Created by !V! on 6/2/2018.
 */
'use strict';

angular.module('myApp.landing', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/landing', {
            templateUrl: 'app/modules/landing/pages/landing.module.html',
            controller: 'LandingCtrl'
        });
    }])

    .controller('LandingCtrl', [function() {

    }]);