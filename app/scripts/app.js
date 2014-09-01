'use strict';

/**
 * @ngdoc overview
 * @name bitDeveloperDay2014App
 * @description
 * # bitDeveloperDay2014App
 *
 * Main module of the application.
 */
angular.module('bitDeveloperDay2014App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
])
.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
