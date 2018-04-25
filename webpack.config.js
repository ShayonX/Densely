
'use strict'; 
const path = require('path'); 
const distDir = path.resolve(__dirname);
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
module.exports = { 
	entry: './entry.js', 
	output: { filename: 'entry.js', path: distDir, }, 
	devServer: { contentBase: distDir, port: 60800, }, 
	plugins: [ new HtmlWebpackPlugin({ title: 'Densely', }), ], 
	module: { 
		rules: [
		{ test: /\.ts$/, loader: 'ts-loader'},
		{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
		{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000', }], 
	}, 
	node: {
   		fs: "empty",
   		net : "empty",
   		tls: "empty",
   		child_process:"empty"
	}
};
