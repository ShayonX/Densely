var path = require('path')
var express = require('express');
var fs = require('fs'); 
var app = express();
var serverStartTime =Date.now();
var spawn = require('child_process').spawn;
var PythonShell = require('python-shell');


app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname,'public')));
app.get('/', function(req, res) {
	res.render('index', {
		title: 'Welcome'
	});
});

app.get('/getDensity', function(req, res){
	let process = spawn('python',["./Classifiers/crowd_density_custom_classifier.py"]);
  	process.stdout.on('data', function (data) {
  	var message=data.toString("utf8");
  	console.log(message);
    res.send(message);
 	});
});

app.listen(process.env.PORT||8000);

