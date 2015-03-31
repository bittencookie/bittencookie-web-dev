'use strict';

var angular = require('angular');
var LoginController = require('./login-controller');
var DashboardController = require('./dashboard-controller');
var SplashController = require('./splash-controller');
var ContactsController = require('./contacts-controller');
var WorkController = require('./work-controller');
var WorksController = require('./works-controller');
var AboutController = require('./About-controller');

module.exports = angular.module('rtcRoom.controllers', [])
    .controller('LoginController', ['$scope', '$state', LoginController])
    .controller('DashboardController', DashboardController)
    .controller('SplashController', ['$scope', SplashController])
    .controller('ContactsController', ['$scope', ContactsController])
    .controller('WorkController', ['$scope', WorkController])
    .controller('WorksController', ['$scope', WorksController])
    .controller('AboutController', ['$scope', AboutController]);
