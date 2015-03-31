'use strict';

var angular = require('angular');
var headerDirective = require('./header');
var footerDirective = require('./footer');

module.exports = angular.module('rtcRoom.directives', [])
    .directive('headerDirective', headerDirective)
    .directive('footerDirective', footerDirective);
