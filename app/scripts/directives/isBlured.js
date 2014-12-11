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
                //console.log('value changed, new value is: ' + v);
                //console.log('value change: ' + v + 'old-value: ' + x);
                oldValue =x;
            });
	        // on blur, update the value in scope
            element.bind('blur', function (blurEvent) {
            	console.log(oldValue);
            	console.log(element.val());
                if (oldValue != element.val()) {
                    console.log('value changed, new value is: ' + element.val());
                    scope.$apply(attrs.isBlured);
                }
            });
        }
    }
  });
