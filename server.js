/**
 * Created by SilverDash on 6/1/17.
 */

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
