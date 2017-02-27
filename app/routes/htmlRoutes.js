module.exports = function(app) {
	var path = require('path');
	var questionnaire = require('../data/questions.js');

	console.log(questionnaire.answers);

	app.get('/survey', function(req, res) {
		res.render('survey', {
			title: 'Survey',
			questions: questionnaire.questions,
			answers: questionnaire.answers
		});
	});

	// If no matching route is found default to home
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};