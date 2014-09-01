'use strict';

/**
 * @ngdoc function
 * @name bitDeveloperDay2014App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bitDeveloperDay2014App
 */
angular.module('bitDeveloperDay2014App').controller('MainCtrl', function ($scope) {
    $scope.products = [{
        name: 'Büroklammern'
    }, {
        name: 'Textmarker'
    }];

    $scope.addEmpty = function () {
        $scope.emptyProduct = {};
        $scope.products.push($scope.emptyProduct);
    };

    $scope.submitProduct = function () {
        if ($scope.emptyProduct) {
            $scope.emptyProduct = null;
        }
    };

    $scope.removeProduct = function (index) {
        if ($scope.products[index]) {
            $scope.products.splice(index, 1);
        }
    };
});
