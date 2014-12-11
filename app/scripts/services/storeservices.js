'use strict';

/**
 * @ngdoc service
 * @name capsStoreApp.Storeservices
 * @description
 * # Storeservices
 * Service in the capsStoreApp.
 */
angular.module('capsStoreApp')
  .service('Storeservices', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    // get all products list 
    this.getAllProductsDetails = function(){
    	return $http.get('../../products.json');
    };

  });
