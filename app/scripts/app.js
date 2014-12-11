'use strict';

/**
 * @ngdoc overview
 * @name capsStoreApp
 * @description
 * # capsStoreApp
 *
 * Main module of the application.
 */
angular
  .module('capsStoreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdmincontrollerCtrl'
      })
      .otherwise({
        redirectTo: '/admin'
      });
  });
