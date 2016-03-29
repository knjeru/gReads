'use strict';

angular.module('gRead')
.controller('MainAuthorCtrl',['$scope', 'authorServiceApi','$location', function($scope, authorServiceApi, $location){

  $scope.authorList = {};
  $scope.authorFormData = {};

  authorServiceApi.getAllAuthors()
  .success(function(data) {
    $scope.authorList = data;
  });

  $scope.addAuthor = function () {
    authorServiceApi.addAuthor($scope.authorFormData)
    .success(function(data) {
      $location.url('/');
    });
  };

}])
.controller('SingleAuthorCtrl', ['$scope', 'authorServiceApi', '$stateParams', '$location', function($scope,authorServiceApi,$stateParams, $location){

  $scope.id = $stateParams.id;

  authorServiceApi.getAuthor($scope.id)
  .success(function(data) {
    $scope.author = data[0];
  });

  $scope.updateAuthor = function() {
    authorServiceApi.updateAuthor($scope.id, $scope.authorFormData)
    .success(function(data) {
      $location.url('/author/'+$scope.id);
    });
  };

}]);
