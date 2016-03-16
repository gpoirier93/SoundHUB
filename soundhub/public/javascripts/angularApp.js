var app = angular.module('sndhub', ['ui.bootstrap']);

app.service('soundcloudService',['$http', function($http){
    this.connect = function(){
      return $http.get('/connect');
    };
}]);

app.controller('NavBarCtrl', ['$scope', function($scope) {
    $scope.optionsItems = [
      'likes',
      'playlists',
      'friends'
    ];

    $scope.connect = function() {
      soundcloudService.connect();
    };
}]);
