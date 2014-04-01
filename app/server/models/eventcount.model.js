var cmi = require('../cmi'),
	fs = require('fs');

module.exports = cmi.class.model.extend(function () {

	this.model = new cmi.modules.model('eventcount', require('./eventcount.model.json'));

});