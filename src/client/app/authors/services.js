'use strict';

angular.module('gRead')
.factory('authorServiceApi', function($http){

  var urlBase = '/api/authors';
  var authorApi = {};

  authorApi.getAllAuthors = function() {
    return $http.get(urlBase);
  };

  authorApi.getAuthor = function(id) {
    return $http.get(urlBase + '/' + id);
  };

  authorApi.addAuthor = function(author) {
    return $http.post(urlBase + '/new', author);
  };

  authorApi.updateAuthor = function(id, author) {
    return $http.put(urlBase + '/' + id + '/edit', author);
  };

  authorApi.deleteAuthor = function(id) {
    return $http.delete(urlBase + '/' + id + '/delete');
  };

  return authorApi;

});
