angular.module('myApp')
  .controller('myController', ['$scope', function($scope) {
    $scope.myFirstName = 'Jesse';
    $scope.myModel = 'Ready Player One';
  }]);