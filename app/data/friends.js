module.exports = {

	formatSurveyResults: function(body) {
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
	}

};

