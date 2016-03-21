var app = angular.module('sndhub', ['ui.bootstrap', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
                templateUrl : '../templates/unauthenticated.ejs',
                controller  : 'UnauthenticatedCtrl'
            })
            .when('/highlights', {
                templateUrl : '../templates/highlights.ejs',
                controller  : 'HighlightsCtrl'
            })
            .otherwise({
              redirectTo: "/"
            });

    $locationProvider.html5Mode(true);

}]);

app.controller('UnauthenticatedCtrl', ['$scope', function($scope) {
    $scope.test = 'test';

    $scope.connect = function() {
      SC.connect();
    };
}]);
