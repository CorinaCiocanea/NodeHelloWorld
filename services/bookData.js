(function (bookData){
    bookData.books = [   
                        {id:1, 
                        name: "Clean Code - A Handbook of Agile Software Craftsmanship", 
                        authorName :"Robert C. Martin",
                        photoUrl :"bookImgs/Clean Code - A Handbook of Agile Software Craftsmanship.jpg" },
                        {id:2, 
                        name: "A Clash of Kings (A Song of Ice and Fire, Book 2)", 
                        authorName :"George R.R. Martin",
                        photoUrl :"bookImgs/A Clash of Kings (A Song of Ice and Fire, Book 2).jpg" },
                        {id:3, 
                        name: "ASP.NET Web API 2 -Building a REST Service from Start to Finish", 
                        authorName :"Jamie Kurtz, Brian Wortman",
                        photoUrl :"bookImgs/ASP.NET Web API 2 -Building a REST Service from Start to Finish.jpg" }];
    bookData.getBook = function (bookId) {
        return bookData.books.find(o => o.id == bookId);
    }
})(module.exports);