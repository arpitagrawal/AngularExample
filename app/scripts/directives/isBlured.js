'use strict';

/**
 * @ngdoc directive
 * @name capsStoreApp.directive:isBlured
 * @description
 * # isBlured
 */
angular.module('capsStoreApp')
  .directive('isBlured', function () {
    return {
	    restrict: 'A',
		link: function (scope, element, attrs) {
			var oldValue;
        	scope.$watch(attrs.ngModel, function (v,x) {
                oldValue = x;
            });
            element.bind('blur', function (blurEvent) {
            	element.attr("readonly", "readonly");
                if (oldValue != element.val()) {
                    scope.$apply(attrs.isBlured);
                }
            });
        }
    }
  });

  angular.module('capsStoreApp')
  .directive('inputEnabled', function () {
    return {
	    restrict: 'A',
		link: function (scope, element, attrs) {
            element.bind('click', function (clickEvent) {
                element.removeAttr("readonly");
            });
        }
    }
  });
