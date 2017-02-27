module.exports = function(app) {
	var path = require('path');
	var questions = require('../data/questions.js');


	app.get('/survey', function(req, res) {
		res.render('survey', {
			title: 'Survey',
			questions: questions
		});
	});

	// If no matching route is found default to home
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};