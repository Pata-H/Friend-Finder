var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app) {
	app.get("/survey", function(req,res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.use("/index", function (req, res){
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	  });
};