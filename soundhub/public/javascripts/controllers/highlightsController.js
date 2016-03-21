app.controller('HighlightsCtrl', ['$scope','$log', function($scope, $log) {
  SC.get('/tracks/150228455').then(function(track) {
    $scope.track = track;
    $scope.$applyAsync();
  });
}]);
