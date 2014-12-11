'use strict';

describe('Directive: isBlured', function () {

  // load the directive's module
  beforeEach(module('capsStoreApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<is-blured></is-blured>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the isBlured directive');
  }));
});
