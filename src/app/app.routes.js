/**
 * Created by !V! on 6/2/2018.
 */
'use strict';
angular
    .module('myApp.routes', ['ngRoute'])
    .config(config);

function config ($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/landing'});
}