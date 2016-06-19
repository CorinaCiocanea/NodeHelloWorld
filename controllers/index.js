(function (controllers) {
    var booksCtrl = require("./booksController");

    controllers.init = function (app) {
        booksCtrl.init(app);
    }
})(module.exports);