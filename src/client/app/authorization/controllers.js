'use strict';

angular.module('gRead')
  .controller('LoginCtrl', ['$rootScope', '$scope', '$location', '$localStorage', 'Auth',
    function ($rootScope, $scope, $location, $localStorage, Auth) {
        function successAuth(res) {
            $localStorage.token = res.token;
            window.location = "/";
        }

        $scope.login = function () {
            var formData = {
                email: $scope.email,
                password: $scope.password
            };

            Auth.signin(formData, successAuth, function () {
                $rootScope.error = 'Invalid credentials.';
            });
        };

        $scope.register = function () {
            var formData = {
                email: $scope.email,
                password: $scope.password
            };

            Auth.signup(formData, successAuth, function () {
                $rootScope.error = 'Failed to signup';
            });

            $location.url('/login');
        };

        $scope.logout = function () {
            Auth.logout(function () {
                window.location = "/";
            });
        };
        $scope.token = $localStorage.token;
        $scope.tokenClaims = Auth.getTokenClaims();
  }]);
