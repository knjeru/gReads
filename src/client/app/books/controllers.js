'use strict';

angular.module('gRead')
.controller('MainBookCtrl',['$scope', 'bookServiceApi','$location', function($scope, bookServiceApi, $location){

  $scope.bookList = {};
  $scope.bookFormData = {};

  bookServiceApi.getAllBooks()
  .success(function(data) {
    $scope.bookList = data;
  });

  $scope.addBook = function () {
    bookServiceApi.addBook($scope.bookFormData)
    .success(function(data) {
      $location.url('/');
    });
  };

}])
.controller('SingleBookCtrl', ['$scope', 'bookServiceApi', '$stateParams', '$location', function($scope,bookServiceApi,$stateParams, $location){

  $scope.id = $stateParams.id;

  bookServiceApi.getBook($scope.id)
  .success(function(data) {
    $scope.book = data[0];
  });

  $scope.updateBook = function() {
    bookServiceApi.updateBook($scope.id, $scope.bookFormData)
    .success(function(data) {
      $location.url('/book/'+$scope.id);
    });
  };

}]);
