app.controller('TrackPageCtrl', ['$scope', 'soundManager','$routeParams','$log','track', function($scope, soundManager, $routeParams, $log, track) {
  $scope.track = track;
  $log.log(track);
}]);
