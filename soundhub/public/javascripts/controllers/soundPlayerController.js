app.controller('SoundPlayerCtrl', ['$scope','soundManager', function($scope, soundManager) {
  $scope.isPlaying = false;
  $scope.play = function(track) {
    soundManager.play(track);
    $scope.isPlaying = true;
  }

  $scope.pause = function() {
    soundManager.pause();
    $scope.isPlaying = false;
  }
}]);
