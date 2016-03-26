app.service('SCService', ['$log', function($log) {
  this.getTrack = function(id) {
    SC.get('/tracks/'+ id).then(function(track) {
      SC.get('/users/'+ track.user.id).then(function(user) {
        track.user_full = user;
        return track;
      });
    });
  }

  this.getUser = function(id) {
    SC.get('/users/'+ id).then(function(user) {
      return user;
    });
  }
}]);
