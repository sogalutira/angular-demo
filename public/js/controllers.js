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
      console.log(BookService.getBooks());
      console.log(BookService.getBook(2));
      $scope.myFirstName = 'Jesse';
      $scope.myModel = 'Ready Player One';
      $scope.mainCharacter = mainCharacter;
      $scope.CharacterVersionFactory = CharacterVersionFactory;
    }]);