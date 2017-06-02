/**
 * Created by SilverDash on 6/1/17.
 */

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));


require('./routes/htmlRoutes.js')(app);
require('./data/tables.js')(app);
require('./data/waitList.js')(app);

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
// });

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

