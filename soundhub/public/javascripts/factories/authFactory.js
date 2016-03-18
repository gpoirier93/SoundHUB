app.factory('auth', ['$http', '$window', function($http, $window){
    var auth = {};
    // auth.saveToken = function (token){
    //  $window.localStorage['soundhub-token'] = token;
    // };
    //
    // auth.getToken = function (){
    //   return $window.localStorage['soundhub-token'];
    // }

    auth.isLoggedIn = function(){
      return false;
      // var token = auth.getToken();
      //
      // if(token){
      //   var payload = JSON.parse($window.atob(token.split('.')[1]));
      //
      //   return payload.exp > Date.now() / 1000;
      // } else {
      //   return false;
      // }
    };

    return auth;
}]);
