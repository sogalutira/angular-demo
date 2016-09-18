angular.module('myApp')
  .controller('myController', ['$scope', 'mainCharacter', function($scope, mainCharacter) {
    $scope.myFirstName = 'Jesse';
    $scope.myModel = 'Ready Player One';
    $scope.mainCharacter = mainCharacter;
  }]);