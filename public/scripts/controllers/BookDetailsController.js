'use strict';


bookviserApp.controller('bookDetailsController', function bookDetailsController($scope, bookData, $routeParams) {
    $scope.book = bookData.getBook($routeParams.id);
    $scope.markAsRead = function() {
        window.alert('test');
    }
});


//bookviserApp.controller('bookController', function bookController($scope, bookData, $log) {
//    bookData.getBooks()
//        .success(function(data) { $scope.books = data; })
//        .error(function(data, status, headers, config) {
//            $log.warn(data, status, headers(), config);
//        });
//})