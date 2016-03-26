app.service('SCService', ['$log', function($log) {
  this.getTrack = function(id) {
    return SC.get('/tracks/'+ id).then(function(track) {
      $log.log('track')
      return SC.get('/users/'+ track.user.id).then(function(user) {
        $log.log('user')
        track.user_full = user;
        return SC.get('/tracks/'+ id +'/comments').then(function(comments) {
            track.comments = comments;
            return track;
        });
      });
    });
  }

  this.getUser = function(id) {
    SC.get('/users/'+ id).then(function(user) {
      return user;
    });
  }
}]);
