'use strict';

/**
 * @ngdoc filter
 * @name capsStoreApp.filter:storefilter
 * @function
 * @description
 * # storefilter
 * Filter in the capsStoreApp.
 */
angular.module('capsStoreApp')
  .filter('storefilter', function () {
    return function (input, start) {
      start = parseInt(start, 10);
      return input.slice(start);
    };
  });
