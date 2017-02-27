var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
module.exports = path;

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './app/public'));



require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);









app.listen(port, function() {
  console.log("FriendFinder serving on PORT: " + port);
});