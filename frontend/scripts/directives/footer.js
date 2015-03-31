'use strict';

module.exports = function ($templateCache) {
    return {
        restrict: 'E',
        scope: {},
        template: $templateCache.get('footer-directive.html'),
        controller: function () {
            console.log('footer');
        }
    };
};
