angular.module('myApp')
  .controller('myController', [
    '$scope',
    'mainCharacter',
    'CharacterVersionFactory',
    function($scope, mainCharacter, CharacterVersionFactory) {
      console.log(CharacterVersionFactory);
      $scope.myFirstName = 'Jesse';
      $scope.myModel = 'Ready Player One';
      $scope.mainCharacter = mainCharacter;
      $scope.CharacterVersionFactory = CharacterVersionFactory;
    }]);