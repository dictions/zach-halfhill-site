var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.config');

var ROOT_DIR = path.resolve(__dirname, '../');

new WebpackDevServer(webpack(webpackConfig), {
	// public directory for dev server
	contentBase: path.resolve(ROOT_DIR),
	publicPath: webpackConfig.output.publicPath,
	// hot reload
	hot: true,
	// Allow any URL to map to index.html
	// historyApiFallback: true,
	// Shows error and info in console
	quiet: false,
	noInfo: false,
	// Minimal config mess
	stats: {
		assets: false,
		colors: true,
		version: false,
		hash: false,
		timings: false,
		chunks: false,
		chunkModules: false
	}
}).listen(8080, 'localhost', function(error, response) {
	if (error) {
		console.log(error);
	} else {
		console.log('webpack: listening at localhost:8080');
	}
});