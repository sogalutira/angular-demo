angular.module('myApp')
  .controller('myController', [
    '$scope',
    'mainCharacter',
    'CharacterVersionFactory',
    'BookService',
    function($scope,
      mainCharacter,
      CharacterVersionFactory,
      BookService) {
      $scope.myFirstName = 'Jesse';
      $scope.myModel = 'Ready Player One';
      $scope.mainCharacter = mainCharacter;
      $scope.CharacterVersionFactory = CharacterVersionFactory;
      $scope.books = BookService.getBooks();
    }]);