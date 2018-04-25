//include http, fs and url module
var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url');
    imageDir = '../Data/',
    lazyload= require('lazyload'),
    load=require('async-image-loader');

global.document = new JSDOM(html).window.document;

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
 
//create http server listening on port 3333
http.createServer(function (req, document) {
    //use the url to parse the requested url and get the image name
    //var query = url.parse(req.url,true).query;

    var list=[imageDir+'S1_L1_13-57_frame_0000.jpg',
            imageDir+"S1_L1_13-57_frame_0001.jpg",
            imageDir+"S1_L1_13-57_frame_0002.jpg",
            imageDir+"S1_L1_13-57_frame_0003.jpg",
            imageDir+"S1_L1_13-57_frame_0004.jpg",
            imageDir+"S1_L1_13-57_frame_0005.jpg",
            imageDir+"S1_L1_13-57_frame_0006.jpg",
            imageDir+"S1_L1_13-57_frame_0007.jpg",
            imageDir+"S1_L1_13-57_frame_0008.jpg",
            imageDir+"S1_L1_13-57_frame_0009.jpg",
            imageDir+"S1_L1_13-57_frame_00010.jpg"]
    load(list, function (images){
        images.filter(Boolean).forEach(function (img){
            document.body.appendChild(img)
        })
    })
    

}).listen(8080);



console.log("Server running at http://localhost:3333/");
