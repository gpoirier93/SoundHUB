app.controller('SoundPlayerCtrl', ['$scope', '$log', 'soundManager', function($scope, $log, soundManager) {

  $log.log($scope.$index);

  $scope.isPlaying = false;
  $scope.animationWidth = 0;
  var playCallback = function(trackDuration) {
    $scope.isPlaying = true;
    animateProgressionBar();
  };
  var pauseCallback = function() {
    $scope.isPlaying = false;
  };
  var finishCallback = function () {
    document.getElementById("progression-bar-"+$scope.$index).style.width = '0%';
    $scope.animationWidth = 0;
    $scope.isPlaying = false;
  }

  $scope.play = function(track) {
    soundManager.play(track, playCallback, pauseCallback, finishCallback);
  }

  $scope.pause = function() {
    soundManager.pause();
  }

  $scope.seek = function(time) {
    soundManager.seek(time);
  }

  $scope.onSeekClick = function(event) {
    var target = event.target || event.srcElement;

    var rect = target.getBoundingClientRect();
    //  X       seekedTime
    //  -   =       -
    //totalX    totalDuration
    var seekedTime = (event.pageX - rect.left) * $scope.track.duration / target.width;
    $scope.seek(seekedTime);
  }

  var animateProgressionBar = function move() {
    var elem = document.getElementById("progression-bar-"+$scope.$index);
    var id = setInterval(frame, 100);
    function frame() {
      if ($scope.animationWidth >= 100 || !$scope.isPlaying) {
          clearInterval(id);
      } else {
        setRelativeAnimationWidth();
        elem.style.width = $scope.animationWidth + '%';
      }
    }
  }

  var setRelativeAnimationWidth = function () {
    $scope.animationWidth = soundManager.currentTime() * 100 / $scope.track.duration;
  }
}]);
