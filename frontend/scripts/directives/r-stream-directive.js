'use strict';

module.exports = function ($templateCache) {
    console.log($templateCache.get('r-stream-directive.html'));
    console.log('HEYOOOHH');
    return {
        restrict: 'E',
        scope: {
            stream: '=stream'
        },
        template: $templateCache.get('r-stream-directive.html'),
        controller: function ($scope, $element, $window) {
            var createSrc = $window.URL ?
                    $window.URL.createObjectURL :
                    function (stream) {
                        return stream;
                    };

            var video = $element.find('video')[0];
            video.src = createSrc($scope.stream);
            video.play();
        }
    };
};
