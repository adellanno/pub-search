var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public")); // looks for static(html) files for the views

app.get('/', function (req, res) {
  res.send("Hello pub world")
})

app.listen(3000);
console.log("we're alive and kicking!")
