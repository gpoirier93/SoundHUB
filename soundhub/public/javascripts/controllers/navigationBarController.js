app.controller('NavBarCtrl', ['$scope','auth', function($scope, auth) {
    if (auth.isLoggedIn()) {
      $scope.navigationOptions = [
        'likes',
        'playlists',
        'friends'
      ];
      $scope.feedsOptions = [{
          title: 'highlights',
          path: '/highlights'
        },
        {
          title: 'my stream',
          path: '/myStream'
        },
        {
          title: 'activities feed',
          path: '/activitiesFeed'
        }
      ];
    } else {
      $scope.navigationOptions = [
        'connect'
      ];
      $scope.feedsOptions = [{
        title: 'highlights',
        path: '/highlights'
      }];
    } 
}]);
