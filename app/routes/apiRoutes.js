var friendsDB = require("../data/friends");

module.exports = function(app) {

	app.post("/api/friends", function(req, res) {
		friends.push(req.body);
	}); // app.post

}; // module.exports