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
                    var track = playlistFactory.getPlaylistObject($route.current.params.trackId);
                    if (track) {
                      track.user_full = SCService.getUser(track.user.id);
                      return track;
                    } else {
                      return SCService.getTrack($route.current.params.trackId);
                    }
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
