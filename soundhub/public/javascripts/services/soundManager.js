app.service('soundManager', ['$log', function($log) {
  var currentPlayer;
  var currentTrack;
  var isPlayerPlaying = false;

  this.play = function(track) {
    if (currentPlayer && currentTrack && currentTrack.id === track.id) {
      currentPlayer.play();
    } else {
      currentTrack = track;
      SC.stream('/tracks/'+ track.id).then(function(player) {
        currentPlayer = player;
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
