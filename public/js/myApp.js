var myApp = angular.module('myApp', ['ngRoute'])
  .config([
    'MoviesProvider',
    '$routeProvider',
    function(MoviesProvider, $routeProvider){
      MoviesProvider.setEndpoint('/api/movies');

      $routeProvider
        .when('/', {
          templateUrl: 'views/default.html'
        })
        .when('/books', {
          templateUrl: 'views/books.html',
          controller: 'booksController'
        })
        .when('/movies', {
          templateUrl: 'views/movies.html',
          controller: 'moviesController'
        })
        .when('/other', {
          templateUrl: 'views/other.html',
          controller: 'myController'
        });
    }
  ])
  .run(['$rootScope', 'APP_VERSION', function($rootScope, version){
    $rootScope.APP_VERSION = version;
  }]);
