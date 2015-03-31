/**
 * @file Login Controller
 * @description Contains the controller for the login state
 */

module.exports = function LoginController($scope, $state) {
    'use strict';

    $scope.data = {
        username: '',
        password: ''
    };

    $scope.login = function () {
        $state.go('dashboard');
    };
};
