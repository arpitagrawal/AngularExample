'use strict';

/**
 * @ngdoc function
 * @name capsStoreApp.controller:AdmincontrollerCtrl
 * @description
 * # AdmincontrollerCtrl
 * Controller of the capsStoreApp
 */
angular.module('capsStoreApp')
  .controller('AdmincontrollerCtrl', function ($scope,Storeservices) {

    $scope.productsList = [];

    $scope.itemsPerPage = 2;
	$scope.currentPage = 0;

	$scope.range = function() {
	    var rangeSize = 5;
	    var ret = [];
	    var start;

	    start = $scope.currentPage;
	    if ( start > $scope.pageCount()-rangeSize ) {
	      start = $scope.pageCount()-rangeSize+1;
	    }

	    for (var i=start; i<start+rangeSize; i++) {
	      ret.push(i);
	    }
	    return ret;
	};

	$scope.setPage = function(n) {
	    $scope.currentPage = n;
	};

	$scope.prevPage = function() {
	    if ($scope.currentPage > 0) {
	      $scope.currentPage--;
	    }
	};

	$scope.prevPageDisabled = function() {
		return $scope.currentPage === 0 ? "disabled" : "";
	};

	$scope.pageCount = function() {
	    return Math.ceil($scope.productsList.length/$scope.itemsPerPage)-1;
	};

	$scope.nextPage = function() {
	    if ($scope.currentPage < $scope.pageCount()) {
	      $scope.currentPage++;
	    }
	};

	$scope.nextPageDisabled = function() {
	    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
	};

    $scope.loadMore = function(){
    	Storeservices.getAllProductsDetails()
		.success(function(data,status,headers,config){
			if(data){
				$scope.productsList = data;				
			}
		})
		.error(function(data,status,headers,config){

		});
    };

    $scope.test = function(id){
    	console.log(id);
    }
	
	var init = function(){
		$scope.loadMore();
	};
	init();


  });
