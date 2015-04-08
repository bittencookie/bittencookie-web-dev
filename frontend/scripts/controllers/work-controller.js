/*global $:true */
var works = require('../works');

module.exports = function WorkController($scope, $stateParams, $sce, $timeout) {
    'use strict';
    $scope.works = works;
    $scope.work = works[$stateParams.work];
    $scope.work.info = $sce.trustAsHtml($scope.work.info);

    $timeout(function () {
        $('.carrousel').slick({
            adaptiveHeight: true,
            autoplay: true
        });
    });

};
