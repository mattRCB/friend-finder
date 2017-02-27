var friendsDB = require("../data/friends");

module.exports = function(app) {
	var bodyParser = require('body-parser');

	app.post("/api/friends", function(req, res) {
		friendsDB.push(req.body);
		console.log(req.body);
	}); // app.post

	app.get("/api/friends", function(req, res) {
		res.send(friendsDB);
	});

}; // module.exports