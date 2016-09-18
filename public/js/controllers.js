angular.module('myApp')
  .controller('myController', [
    '$scope',
    'mainCharacter',
    'CharacterVersionFactory',
    function($scope,
      mainCharacter,
      CharacterVersionFactory) {
      $scope.myFirstName = 'Jesse';
      $scope.myModel = 'Ready Player One';
      $scope.mainCharacter = mainCharacter;
      $scope.CharacterVersionFactory = CharacterVersionFactory;
    }])
  .controller('booksController', [
    '$scope',
    'BookService',
    function($scope,
      BookService) {
      $scope.BookService = BookService;
  }])
  .controller('moviesController', [
    '$scope',
    'Movies',
    function($scope, Movies) {
      $scope.movies = [];
      Movies.getMovies()
        .then((response) => {
          $scope.movies = response.data;
        });
    }]);