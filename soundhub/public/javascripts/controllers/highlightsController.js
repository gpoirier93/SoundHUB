app.controller('HighlightsCtrl', ['$scope','$log', function($scope, $log) {
  SC.get('/resolve?url=https://soundcloud.com/oblivioustalk/sets/otc1').then(function(playlist) {
    $scope.tracks = playlist.tracks;
    $scope.$applyAsync();
  });
}]);
