app.service('soundManager', ['$log', function($log) {
  var currentPlayer;
  var currentTrack;
  var isPlayerPlaying = false;

  this.play = function(track, playCallback, pauseCallback, finishCallback) {
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
        currentPlayer.on('finish', function() {
          finishCallback();
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
  this.seek = function(time, shouldPlay) {
    if (currentPlayer) {
      currentPlayer.seek(time);
    }
  }
  this.currentTime = function() {
    if (currentPlayer) {
      return currentPlayer.currentTime();
    } else {
      return 0;
    }
  }
}]);
