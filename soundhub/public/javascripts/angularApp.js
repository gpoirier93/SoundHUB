var app = angular.module('sndhub', ['ui.router', 'ui.bootstrap']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('unauthenticated', {
      url:'/',
      templateUrl: '/unauthenticated.html',
      controller: 'UnauthenticatedCtrl'
    });
    $stateProvider.state('highlights', {
      url:'/highlights',
      templateUrl: '/highlights.html',
      controller: 'HighlightsCtrl'
    });
    $urlRouterProvider.otherwise('/');
}]);

// app.service('soundcloudService',['$http', function($http){
//     this.connect = function(){
//
//     };
// }]);

app.controller('UnauthenticatedCtrl', ['$scope', function($scope) {
    $scope.test = 'test';

    $scope.connect = function() {
      SC.connect();
    };
}]);
