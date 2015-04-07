var works = require('../works');

module.exports = function ContactsController($scope, $stateParams, $sce) {
    'use strict';
    $scope.works = works;
    $scope.work = works[$stateParams.work];
    $scope.work.info = $sce.trustAsHtml($scope.work.info);
    console.log('work controller');
};
