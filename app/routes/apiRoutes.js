// var friendsDB = require("../data/friends");
require('../data/friends.js');
var fs = require('fs');

function formatSurveyResults(body) {
	var result = {};
	result.name = body.name;
	result.photo = body.photo;
	result.scores = [];

	for (i = 0; i < 10; i++) {
		var index = ('question-' + i);
		result.scores.push(body[index].slice(0, 1));
	}
	console.log(result);
	return result;
};

module.exports = function(app) {
	var bodyParser = require('body-parser');

	app.get("/api/friends", function(req, res) {
		var dbArray;
		fs.readFile("./app/data/friendsDB.txt", 'utf-8', function(err, data) {
			if (err) throw err;
			// console.log(data);
			dbArray = "[" + data + "]";
			console.log(dbArray);
			res.send(dbArray);

		});

		// console.log(dbArray);
	});

	app.post("/api/friends", function(req, res) {
		fs.appendFile("./app/data/friendsDB.txt", ("," + JSON.stringify(formatSurveyResults(req.body))), function (err) {
			if (err) throw err;
			console.log("Added new user to friendsDB");
		});

		res.redirect("/");

		// do the logic and display the modal

	}); // app.post


}; // module.exports