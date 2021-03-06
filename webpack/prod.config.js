var path = require('path');
var webpack = require('webpack');
var babelSettings = require('./babelSettings');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ROOT_DIR = path.resolve(__dirname, '../');

module.exports = {
	context: path.resolve(ROOT_DIR, 'src'),
	entry: {
		'main': './main.js'
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
				loader: ExtractTextPlugin.extract('style', 'css!sass')
			}
		]
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [
		// External CSS File
		new ExtractTextPlugin('[name].css'),
		// Minify
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compressor: { warnings: false }
		}),
		// Copy to dist
		new CopyWebpackPlugin([{
			from: path.resolve(ROOT_DIR, 'src', 'public'),
			to: path.resolve(ROOT_DIR, 'dist'),
		}])
	]
};