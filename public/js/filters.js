angular.module('myApp')
  .filter('beforeYearFilter', function () {
    return function (movies, year) {
      return movies.filter(movie => movie.year < year);
    };
  });