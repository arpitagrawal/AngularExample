'use strict';

describe('Directive: commonDirective', function () {

  // load the directive's module
  beforeEach(module('capsStoreApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<common-directive></common-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the commonDirective directive');
  }));
});
