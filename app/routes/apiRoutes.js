var friendsDB = require("../data/friends");

module.exports = function(app) {
	var bodyParser = require('body-parser');

	app.post("/api/friends", function(req, res) {
		// friends.push(req.body);
		console.log(req.body);
	}); // app.post

}; // module.exports