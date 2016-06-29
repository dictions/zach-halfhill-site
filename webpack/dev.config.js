var path = require('path');
var webpack = require('webpack');
var babelSettings = require('./babelSettings');

var ROOT_DIR = path.resolve(__dirname, '../');

var DEV_SERVER = [
	'webpack-dev-server/client?http://localhost:8080',
	'webpack/hot/only-dev-server'
];

module.exports = {
	devtool: 'eval-source-map',
	context: path.resolve(ROOT_DIR, 'src'),
	entry: {
		'main': DEV_SERVER.concat(['./main.js']),
	},
	output: {
		path: path.resolve(ROOT_DIR, 'dist', 'assets'),
		publicPath: '/assets/',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: babelSettings
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: 'style!css!sass'
			}
		]
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [
		// Hot Reload
		new webpack.HotModuleReplacementPlugin(),
		// Prevent Webpack from throwing and exiting process
		new webpack.NoErrorsPlugin()
	]
};