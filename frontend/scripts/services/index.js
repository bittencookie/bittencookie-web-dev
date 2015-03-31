'use strict';

var angular = require('angular');
var NavigatorService = require('./navigator-service');
var PeerConnectionService = require('./peer-connection-service');

module.exports = angular.module('rtcRoom.services', [])
    .service('NavigatorService', NavigatorService)
    .service('PeerConnectionService', PeerConnectionService);
