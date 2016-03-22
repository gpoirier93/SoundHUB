app.service('soundManager', ['$log', function($log) {
  var currentPlayer;
  var currentTrack;
  var isPlayerPlaying = false;

  this.play = function(track, playCallback, pauseCallback) {
    if (currentPlayer && currentTrack && currentTrack.id === track.id) {
      currentPlayer.play();
    } else {
      $log.log(track.id);
      currentTrack = track;
      this.pause();
      SC.stream('/tracks/'+ track.id).then(function(player) {
        $log.log('stream');
        currentPlayer = player;

        currentPlayer.on('play', function() {
          playCallback(currentTrack.duration);
        });
        currentPlayer.on('pause', function() {
          pauseCallback();
        });

        currentPlayer.play();
      });
    }
  }

  this.pause = function() {
    if (currentPlayer) {
      currentPlayer.pause();
    }
  }
}]);
