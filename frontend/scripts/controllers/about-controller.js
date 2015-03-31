var team = require('../team.js');
module.exports = function AboutController($scope, $state) {
    'use strict';
    $scope.team = team;

    $scope.team.forEach(function (member) {
        member.background = "background-image: url('/img/team/" + member.image + "')";
    });

    console.log('IO LOOOO');
};
