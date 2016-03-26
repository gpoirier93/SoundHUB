app.controller('HighlightsCtrl', ['$scope','$log','playlistFactory', function($scope, $log, playlistFactory) {
  SC.get('/resolve?url=https://soundcloud.com/oblivioustalk/sets/otc1').then(function(playlist) {
    $scope.tracks = playlist.tracks;
    playlistFactory.setPlaylistObjects(playlist.tracks);
    $scope.$applyAsync();
  });
}]);
