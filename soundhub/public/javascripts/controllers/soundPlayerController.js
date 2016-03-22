app.controller('SoundPlayerCtrl', ['$scope', '$log', 'soundManager', function($scope, $log, soundManager) {

  $scope.isPlaying = false;
  var playCallback = function() {
    $log.log('play');
    $scope.isPlaying = true;
  };
  var pauseCallback = function() {
    $log.log('pause');
    $scope.isPlaying = false;
  };

  $scope.play = function(track) {
    soundManager.play(track, playCallback, pauseCallback);
  }

  $scope.pause = function() {
    soundManager.pause();
  }
}]);
