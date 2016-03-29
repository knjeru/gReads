'use strict';

angular.module('gRead')
  .controller('LoginCtrl', ['$scope', '$auth', '$location', function($scope,$auth, $location) {
    // $scope.authenticate = function(provider) {
    //   $auth.authenticate(provider)
    // }

    var user = {
      email: $scope.email,
      password: $scope.password
    }

    var newUser = {
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      email: $scope.email,
      password: $scope.password
    };

    $auth.signup(user)
      .then(function(res) {

      })
      .catch(function(res) {

      });

    $auth.login(user)
      .then(function(res) {
        $location.url('/login');
      })
      .catch(function(res) {
        $location.url('/register');
      });

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
    
  }]);
