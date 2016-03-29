'use strict';

angular.module('gRead')
.factory('bookServiceApi', function($http){

  var urlBase = '/api/books';
  var bookApi = {};

  bookApi.getAllBooks = function() {
    return $http.get(urlBase);
  };

  bookApi.getBook = function(id) {
    return $http.get(urlBase + '/' + id);
  };

  bookApi.addBook = function(book) {
    return $http.post(urlBase + '/new', book);
  };

  bookApi.updateBook = function(id, book) {
    return $http.put(urlBase + '/' + id + '/edit', book);
  };

  bookApi.deleteBook = function(id) {
    return $http.delete(urlBase + '/' + id + '/delete');
  };

  return bookApi;

});
