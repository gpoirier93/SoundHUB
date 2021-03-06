var app = angular.module('sndhub', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
                templateUrl : '../templates/unauthenticated.ejs',
                controller  : 'UnauthenticatedCtrl'
            })
            .when('/highlights', {
                templateUrl : '../templates/highlights.ejs',
                controller  : 'HighlightsCtrl'
            })
            .when('/tracks/:trackId', {
                templateUrl : '../templates/track-page.ejs',
                controller  : 'TrackPageCtrl',
                resolve: {
                  track: function($route, playlistFactory, SCService) {
                      return SCService.getTrack($route.current.params.trackId);
                  }
                }
            })
            .otherwise({
              redirectTo: "/"
            });

    $locationProvider.html5Mode(true);

}]);

app.controller('UnauthenticatedCtrl', ['$scope', function($scope) {
    $scope.connect = function() {
      SC.connect();
    };
}]);
