app.controller('HomeCtrl', ['$scope', function($scope, authFactory){
  SC.initialize({
    client_id: '3246c29fb8e8276c21a11fb2143ce568',
    redirect_uri: 'http://127.0.0.1:3000/callback'
  });
}]);
