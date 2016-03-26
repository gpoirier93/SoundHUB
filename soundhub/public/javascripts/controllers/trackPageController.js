app.controller('TrackPageCtrl', ['$scope', 'soundManager','$routeParams','$log','track', function($scope, soundManager, $routeParams, $log, track) {
  $scope.track = track;
  // $scope.scopedComments = track.comment
  $log.log(track);
}]);
