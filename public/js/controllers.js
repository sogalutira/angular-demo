angular.module('myApp')
  .controller('myController', [
    '$scope',
    'mainCharacter',
    'CharacterVersionFactory',
    'BookService',
    'Movies',
    function($scope,
      mainCharacter,
      CharacterVersionFactory,
      BookService, Movies) {
      $scope.myFirstName = 'Jesse';
      $scope.myModel = 'Ready Player One';
      $scope.mainCharacter = mainCharacter;
      $scope.CharacterVersionFactory = CharacterVersionFactory;
      $scope.BookService = BookService;
      $scope.movies = [];
      Movies.getMovies()
        .then((response) => {
          $scope.movies = response.data;
        });
    }]);