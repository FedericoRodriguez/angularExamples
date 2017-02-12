app.directive('backButton', ['$window', function($window) {
    return {
        restrict: 'A',//solo machea con attr the elemnto del dom
        link: function (scope, elem, attrs) {
            elem.bind('click', function () {
                $window.history.back();
            });
        }
    };
}]);



		