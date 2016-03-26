app.factory('playlistFactory', ['$log', function($log) {

  playlist = {
    objects: []
  };

  playlist.getPlaylistObject = function(id) {
    var object;
    for(i = 0; i < this.objects.length; i++) {
      if (this.objects[i].id == id) {
        object = this.objects[i];
        break;
      }
    }
    return object;
  };

  playlist.setPlaylistObjects = function(objects) {
    this.objects = objects;
  };

  return playlist;
}]);
