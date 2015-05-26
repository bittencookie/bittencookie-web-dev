/**
 * @file Contact Controller
 * @description Contains the controller for the contacts state
 */

module.exports = function ContactsController($scope, $state) {
    'use strict';
    $scope.destiny = {
        email: "contact@bittencookie.pt",
        subject: "Site contact form"
    };

    $scope.data = {
        name: '',
        address: '',
        message: ''
    };

    var concatBodyAddress = function () {
        return "From: " + $scope.data.name + ", " + $scope.data.address
            + "\n" + $scope.data.message;
    };

    $scope.mailtoHref = function () {
        return encodeURI('mailto:' + $scope.destiny.email + '?subject='
            + $scope.destiny.subject + '&body=' + concatBodyAddress());
    };
};
