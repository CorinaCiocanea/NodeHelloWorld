'use strict';


bookviserApp.controller('booksController', function booksController($scope, bookData, $log) {
    $scope.books = bookData.getBooks();
});


//bookviserApp.controller('bookController', function bookController($scope, bookData, $log) {
//    bookData.getBooks()
//        .success(function(data) { $scope.books = data; })
//        .error(function(data, status, headers, config) {
//            $log.warn(data, status, headers(), config);
//        });
//})