/**
 * @file Contact Controller
 * @description Contains the controller for the contacts state
 */

module.exports = function ContactsController($scope, $state) {
    'use strict';
    $scope.data = {
        name: '',
        address: '',
        message: ''
    };
};
