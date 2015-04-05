'use strict';

var $ = require('jquery');
var angular = require('angular');
require('angular-ui-router');
require('./controllers');
require('./services');
require('./factories');
require('./directives');

angular.module('sos-shake', [
    'ui.router',
    'rtcRoom.controllers',
    'rtcRoom.services',
    'rtcRoom.factories',
    'rtcRoom.directives'
])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider,   $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('home.html');
                    }
                })
                .state('about', {
                    url: '/about',
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('about.html');
                    },
                    controller: 'AboutController'
                })
                .state('contact', {
                    url: '/contact',
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('contact.html');
                    },
                    controller: 'ContactsController'
                })
                .state('work', {
                    url: '/work/:work',
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('work.html');
                    },
                    controller: 'WorkController'
                })
                .state('works', {
                    url: '/works',
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('works.html');
                    },
                    controller: 'WorksController'
                });
        }]);
