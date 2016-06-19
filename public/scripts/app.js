var bookviserApp = angular.module('bookviser', ['ngResource', 'ngRoute'])
    .constant('appSettings', { serverPath: 'http://localhost:25089/api/' })
    .config(function($routeProvider) {
        $routeProvider.when('/book/:id',
            {
                templateUrl:'templates/BookDetails.html',
                controller: 'bookDetailsController'
            });
        $routeProvider.when('/books',
          {
              templateUrl: 'templates/BooksList.html',
              controller: 'booksController'
          });
        $routeProvider.otherwise({ redirectTo: '/books' });

    })