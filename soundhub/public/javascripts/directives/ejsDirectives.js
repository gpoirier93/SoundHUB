app.directive('navBar', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/navBar.ejs'
  };
});
app.directive('unauthenticatedHome', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/unauthenticated.ejs'
  };
});

app.directive('highlights', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/highlights.ejs'
  };
});
