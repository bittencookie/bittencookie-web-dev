/*global $:true */
var works = require('../works');

module.exports = function WorkController($scope, $stateParams, $state, $sce, $timeout) {
    'use strict';
    $scope.works = works;
    $scope.work = works[$stateParams.work];
    $scope.work.info = $sce.trustAsHtml($scope.work.info);

    $timeout(function () {
        $('.carrousel').slick({
            adaptiveHeight: false,
            autoplay: true,
            arrows: false
        });
    });

    $scope.goToWork = function (key) {
        $state.go('work', {
            work: key
        });
    };
};
