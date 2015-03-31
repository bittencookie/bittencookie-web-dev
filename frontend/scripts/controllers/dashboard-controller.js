var $ = require('jQuery');

/**
 * @file Dashboard Controller
 * @description Contains the controller for the dashboard state
 */

module.exports = function DashboardController($scope, $state) {
    'use strict';

    $(".dropdown-button").click(function () {
        console.log('clique carl');
        $(".dropdown-menu").toggleClass("show-menu");
        $(".dropdown-menu > li").click(function () {
            $(".dropdown-menu").removeClass("show-menu");
        });
        $(".dropdown-menu.dropdown-select > li").click(function () {
            $(".dropdown-button").html($(this).html());
        });
    });
};
