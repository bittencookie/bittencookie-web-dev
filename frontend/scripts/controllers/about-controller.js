var team = require('../team.js');
module.exports = function AboutController($scope, $state) {
    'use strict';
    $scope.team = team;
    var phrase = "We are more than just bits & bites!";
    $scope.introTitle = phrase.split(" ");
    phrase = "Can you handle another byte? Check out our portfolio.";
    $scope.teamTitle = phrase.split(" ");

    $scope.team.forEach(function (member) {
        member.background = "background-image: url('/img/team/" + member.image + "')";
    });

    $scope.changeWord = function (newWord, isTeamTitle) {
        if (isTeamTitle) {
            $scope.teamTitle[4] = newWord;
        } else {
            $scope.introTitle[$scope.introTitle.length - 1] = newWord;
        }
    };

    console.log('IO LOOOO');
};
