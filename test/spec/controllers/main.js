'use strict';

describe('Controller: MainCtrl', function () {
    var MainCtrl,
        scope;

    // load the controller's module
    beforeEach(module('bitDeveloperDay2014App'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of default products to the scope', function () {
        expect(scope.products.length).toBe(2);
    });
});
