'use strict';

/**
 * @ngdoc function
 * @name capsStoreApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the capsStoreApp
 */
angular.module('capsStoreApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
