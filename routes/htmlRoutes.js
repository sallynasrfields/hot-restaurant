module.exports = function (app) {
    console.log('it is here');

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../home.html"));
    });

};

