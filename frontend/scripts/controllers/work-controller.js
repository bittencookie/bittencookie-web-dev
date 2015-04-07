var works = require('../works');

module.exports = function ContactsController($scope) {
    'use strict';
    $scope.works = works;
    console.log('work controller');
};
