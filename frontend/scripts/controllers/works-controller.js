var works = require('../works');
module.exports = function WorksController($scope, $state) {
    'use strict';
    $scope.works = works;

    $scope.goToWork = function (key) {
        $state.go('work', {
            work: key
        });
    };
};
