'use strict';

describe('Filter: storefilter', function () {

  // load the filter's module
  beforeEach(module('capsStoreApp'));

  // initialize a new instance of the filter before each test
  var storefilter;
  beforeEach(inject(function ($filter) {
    storefilter = $filter('storefilter');
  }));

  it('should return the input prefixed with "storefilter filter:"', function () {
    var text = 'angularjs';
    expect(storefilter(text)).toBe('storefilter filter: ' + text);
  });

});
