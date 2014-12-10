'use strict';

/**
 * @ngdoc directive
 * @name capsStoreApp.directive:commonDirective
 * @description
 * # commonDirective
 */
angular.module('capsStoreApp')
  .directive('commonDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the commonDirective directive');
      }
    };
  });
