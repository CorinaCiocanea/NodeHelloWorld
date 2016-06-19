bookviserApp.factory('bookData', function ($resource, appSettings) {
    var bookResource = $resource(appSettings.serverPath + 'Books/:id');
        return {
            getBooks: function() {
                return bookResource.query();
            },
            getBook: function(bookId) {
                return bookResource.get({id:bookId});
            }
        }
    })


//bookviserApp.factory('bookData', function($http) {
//    return {
//        getBooks: function() {
//            return $http({ method: "GET", url: "http://localhost:25089/api/Books" });
//        }
//    }
//})