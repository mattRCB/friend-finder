var fs = require('fs');

module.exports = {

	findBestMate: function(newUser, callback) {
		var dbArray;
		fs.readFile("./app/data/friendsDB.txt", 'utf-8', function(err, data) {
			if (err) throw err;
			dbArray = JSON.parse("[" + data + "]");

			var bestMate;
			var bestSumOfDifs = 41; //starting this at greater than mathematically possible difference.
			for (var i=0; i<dbArray.length-2; i++) {
				var crntSumOfDifs = 0;
				for (var j = 0; j<newUser.scores.length; j++) {
					crntSumOfDifs += Math.abs(parseInt(newUser.scores[j]) - parseInt(dbArray[i].scores[j]));
					console.log(dbArray[i].name + ": crntSumOfDifs = " + crntSumOfDifs);
				}
				if (crntSumOfDifs < bestSumOfDifs) {
					bestSumOfDifs = crntSumOfDifs;
					bestMate = dbArray[i];
				}			
			}
			// console.log("The best programming pal is: " + bestMate.name);

			callback(bestMate);

		});//fs.readFile
	}//findBestMate

};

