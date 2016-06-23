var PRODUCTION = process.env.NODE_ENV === 'production';

if (PRODUCTION) {
	module.exports = require('./webpack/prod.config');
} else {
	module.exports = require('./webpack/dev.config');
}