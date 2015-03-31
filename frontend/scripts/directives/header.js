'use strict';

module.exports = function ($templateCache) {
    return {
        restrict: 'E',
        scope: {},
        template: $templateCache.get('header-directive.html'),
        controller: function ($scope) {

            $scope.data = {
                menuActive: false
            };

            $scope.showMenu = function () {
                $scope.data.menuActive = true;
            };

            $scope.hideMenu = function () {
                $scope.data.menuActive = false;
            };

            $scope.toggleMenu = function () {
                $scope.data.menuActive = !$scope.data.menuActive;
            };

        }
    };
};
