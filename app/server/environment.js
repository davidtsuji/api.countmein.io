var app = require('./app');

// switch (true) {

// case /countmein.io/.test(window.location.hostname):
// 	app.config.environment = 'prod';
// 	break;

// default:
// 	app.config.environment = 'local';
// 	app.config.api.base = 'http://localhost:3050';
// 	break;

// }

module.exports = app.config.environment;