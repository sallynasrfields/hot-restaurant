var path = require('path');

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../home.html"));
    });
    app.get('/reserve', function (app) {
       res.sendFile(path.join(__dirname, '../reservation.html'))
    });
    app.get('/tables', function (app) {
      res.sendFile(path.join(__dirname, '../tables.html'))
    });
};

