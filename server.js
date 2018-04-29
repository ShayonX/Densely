var path = require('path')
var express = require('express');
var fs = require('fs'); 
var app = express();
var serverStartTime =Date.now();
var exec = require('child_process').exec;
var PythonShell = require('python-shell');

// var kue = require('kue'), jobs = kue.createQueue();

// function newJob (name){
//   name = name || 'Default_Name';
//   var job = jobs.create('new job', {
//     name: name
//   });

//   job
//     .on('complete', function (){
//       console.log('Job', job.id, 'with name', job.data.name, 'is done');
//     })
//     .on('failed', function (){
//       console.log('Job', job.id, 'with name', job.data.name, 'has failed');
//     })

//   job.save();
// }

// jobs.process('new job', function (job, done){
//   /* carry out all the job function here */
//   done && done();
// });


// setInterval(function (){
//   newJob('Send_Email');
// }, 3000);


// const child = exec('node',[], (error, stdout, stderr) => {
	
// });

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
	var process = exec('python',["./test.py",parseFloat(currentLoopFrame)]);
  	process.stdout.on('data', function (data) {
  	console.log(data)
    res.send(data);
 	});
  	process.stdin.pause();
	process.kill();
	

// PythonShell.run('./test.py', options, function (err, results) {
//   if (err) throw err;
//   console.log('results: %j', results);
// });


});

app.listen(3000);