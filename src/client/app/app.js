'use strict';

angular.module('gRead', ['ui.router', 'door3.css'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/app/dashboard/views/main.html'
    })
    .state('books', {
      url: '/books',
      templateUrl: '/app/books/views/main.html',
      controller: 'MainBookCtrl'
    })
    .state('addBook', {
      url: '/books/new',
      templateUrl: '/app/books/views/new.html',
      controller: 'MainBookCtrl'
    })
    .state('book', {
      url: '/book/:id',
      templateUrl: '/app/books/views/single.html',
      controller: 'SingleBookCtrl'
    })
    .state('editBook', {
      url: '/book/:id/edit',
      templateUrl: '/app/books/views/edit.html',
      controller: 'SingleBookCtrl',
    })
    .state('authors', {
      url: '/authors',
      templateUrl: '/app/authors/views/main.html',
      controller: 'MainAuthorCtrl'
    })
    .state('addAuthor', {
      url: '/authors/new',
      templateUrl: '/app/authors/views/new.html',
      controller: 'MainAuthorCtrl'
    })
    .state('author', {
      url: '/author/:id',
      templateUrl: '/app/authors/views/single.html',
      controller: 'SingleAuthorCtrl'
    })
    .state('editAuthor', {
      url: '/author/:id/edit',
      templateUrl: '/app/authors/views/edit.html',
      controller: 'SingleAuthorCtrl',
    });
}]);
