var path = require('path')
var express = require('express');
var fs = require('fs'); 
var app = express();
var serverStartTime =Date.now();
var exec = require('child_process').spawn;
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
	var currTime = Date.now();
	var difference= currTime - serverStartTime;
	var framesTillNow =Math.floor(difference/41.666666666666)
	var currentLoopFrame= framesTillNow%400
	let process = exec('python',["test.py",currentLoopFrame.toString()]);
  	process.stdout.on('data', function (data) {
  	var message=data.toString('utf8');
    res.send(message);
 	});
});

app.listen(process.env.PORT||8000);