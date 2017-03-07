// var friendsDB = require("../data/friends");
var friends = require('../data/friends.js');
var fs = require('fs');



module.exports = function(app) {
	var bodyParser = require('body-parser');

	app.get("/api/friends", function(req, res) {

		// res.send(getSnapshot());

		var dbArray;
		fs.readFile("./app/data/friendsDB.txt", 'utf-8', function(err, data) {
			if (err) throw err;
			// console.log(data);
			dbArray = "[" + data + "]";
			console.log(dbArray);
			res.send(dbArray);
		});
	});

	app.post("/api/friends", function(req, res) {
		// console.log(JSON.stringify(req.body));
		fs.appendFile("./app/data/friendsDB.txt", ("," + JSON.stringify(req.body)), function (err) {
			if (err) throw err;
			console.log("Added new user to friendsDB");
		});

		friends.findBestMate(req.body, function(bestMate) {
			console.log(bestMate.name);
			res.send(JSON.stringify(bestMate));
			// console.log("apiRoutes logging findBestMate(): " + bestMate + "\n\n");

			// res.send(JSON.stringify(req.body));
			// do the logic and res.send() the bestMate data (as json?).
			// res.json(friends.findBestMate(req.body));
		});
	}); // app.post
}; // module.exports