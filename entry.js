//include http, fs and url module
'use strict';
var http = require('http'),
    //fs = require('fs'),
    path = require('path'),
    url = require('url'),
    imageDir = 'Data/',
    lazyload= require('lazyload'),
    load=require('async-image-loader'),
    html=require('html-webpack-plugin');
import * as templates from './template.ts'


const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// global.document = new JSDOM(html).window.document;

//create http server listening on port 3333
    //use the url to parse the requested url and get the image name
    //var query = url.parse(req.url,true).query;

    var list=['Data/S1_L1_13-57_frame_0000.jpg',
            imageDir+"S1_L1_13-57_frame_0001.jpg",
            imageDir+"S1_L1_13-57_frame_0002.jpg",
            imageDir+"S1_L1_13-57_frame_0003.jpg",
            imageDir+"S1_L1_13-57_frame_0004.jpg",
            imageDir+"S1_L1_13-57_frame_0005.jpg",
            imageDir+"S1_L1_13-57_frame_0006.jpg",
            imageDir+"S1_L1_13-57_frame_0007.jpg",
            imageDir+"S1_L1_13-57_frame_0008.jpg",
            imageDir+"S1_L1_13-57_frame_0009.jpg",
            imageDir+"S1_L1_13-57_frame_00010.jpg",
            'Data/S1_L1_13-57_frame_0011.jpg',
            imageDir+"S1_L1_13-57_frame_0012.jpg",
            imageDir+"S1_L1_13-57_frame_0013.jpg",
            imageDir+"S1_L1_13-57_frame_0014.jpg",
            imageDir+"S1_L1_13-57_frame_0015.jpg",
            imageDir+"S1_L1_13-57_frame_0016.jpg",
            imageDir+"S1_L1_13-57_frame_0017.jpg",
            imageDir+"S1_L1_13-57_frame_0018.jpg",
            imageDir+"S1_L1_13-57_frame_0019.jpg",
            imageDir+"S1_L1_13-57_frame_0020.jpg",
            imageDir+"S1_L1_13-57_frame_0021.jpg"
            ]
        load(list, function (images){
        images.filter(Boolean).forEach(function (img){
            document.body.appendChild(img)
        })
    })
        document.body.innerHTML=templates.main
//     list.forEach(function(img){
//     var _img = document.getElementById('id1');
// var newImg = new Image;
// newImg.onload = function() {
//     _img.src = this.src;
// }
// newImg.src = 'http://whatever';})
    


console.log("Server running at http://localhost:3333/");
