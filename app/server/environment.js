var cmi = require('./cmi');

// switch (true) {

// case /countmein.io/.test(window.location.hostname):
// 	cmi.config.environment = 'prod';
// 	break;

// default:
// 	cmi.config.environment = 'local';
// 	cmi.config.api.base = 'http://localhost:3050';
// 	break;

// }

module.exports = cmi.config.environment;