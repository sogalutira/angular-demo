var myApp = angular.module('myApp', [])
  .run(['$rootScope', 'APP_VERSION', function($rootScope, version){
    $rootScope.APP_VERSION = version;
  }]);
