'use strict';

/**
 * @ngdoc function
 * @name capsStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capsStoreApp
 */
angular.module('capsStoreApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
