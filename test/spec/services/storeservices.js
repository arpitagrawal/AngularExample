'use strict';

describe('Service: Storeservices', function () {

  // load the service's module
  beforeEach(module('capsStoreApp'));

  // instantiate service
  var Storeservices;
  beforeEach(inject(function (_Storeservices_) {
    Storeservices = _Storeservices_;
  }));

  it('should do something', function () {
    expect(!!Storeservices).toBe(true);
  });

});
