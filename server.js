var path = require('path')
var express = require('express');
var fs = require('fs'); 
var app = express();
var serverStartTime =Date.now();
var spawn = require('child_process').spawn;
var PythonShell = require('python-shell');

var cassandra = require('cassandra-driver');
var async = require('async');
 //Connect to the cluster
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'densely'});


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
	var f_no=currentLoopFrame;
		client.execute('SELECT * FROM data WHERE frame_no='+f_no+';' , function (err, result){
        if (!err){
            if ( result.rows.length > 0 ) {
                var user = result.rows[0];
                var j='{ "people": '+user.people+', "timestamp":'+user.timestamp+',"frameno":'+f_no+' }';
                console.log(j);
                res.write(j);
                res.send();
               } else {
                console.log("No results");
            }
        }
 		   // Run next function in series
    });

});

function loadImage(frameno){
    $.ajax({

        success: function(){
            ajaxCall3();
        }
    });
}

app.listen(process.env.PORT||8000);

