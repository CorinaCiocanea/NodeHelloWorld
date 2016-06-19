(function (booksController) {
    var bookData = require("../services/bookData.js");

    booksController.init = function (app) {
        /*app.get("/api/Books", function (req, resp) {
            resp.send( [{id:1, 
                        name: "Clean Code - A Handbook of Agile Software Craftsmanship", 
                        authorName :"Robert C. Martin",
                        photoUrl :"bookImgs/Clean Code - A Handbook of Agile Software Craftsmanship.jpg" },
                        {id:2, 
                        name: "A Clash of Kings (A Song of Ice and Fire, Book 2)", 
                        authorName :"George R.R. Martin",
                        photoUrl :"bookImgs/A Clash of Kings (A Song of Ice and Fire, Book 2).jpg" }]);*/
          app.get("/api/Books", function (req, resp) {
            resp.send(bookData.books);});       
          app.get("/api/Books/:bookId", function (req, resp) {
            resp.send(bookData.getBook(req.params.bookId));});
    }
})(module.exports);