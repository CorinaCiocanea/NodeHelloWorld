console.log("Hello Node!");
var express = require("express");
var http = require("http");
var path = require("path");
var controllers = require("./controllers");

var myApp = express();
var publicPath = path.resolve(__dirname, "public");
myApp.use(express.static(publicPath));


/* myApp.use(function(request, respose)
{
    console.log("hello request!");
    respose.end();
}); 
*/

/*var data = require("./services/bookData.js");
myApp.get("/api/Books/", function (req, resp) {
            resp.send(data.books);
        });*/


controllers.init(myApp);

console.log("Hello Node!");

var server = http.createServer(myApp);
server.listen(25089);


