var myApp = angular.module('myApp', [])
  .config([
    'MoviesProvider',
    function(MoviesProvider){
      MoviesProvider.setEndpoint('/api/movies');
    }
  ])
  .run(['$rootScope', 'APP_VERSION', function($rootScope, version){
    $rootScope.APP_VERSION = version;
  }]);
