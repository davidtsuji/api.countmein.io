var cmi = require('../cmi');

module.exports = cmi.class.route.extend(function () {

}).methods({

	get: function (_req, _res) {
		var data = new cmi.model.eventcount().model;

		// Faux data 
		data.id = cmi.helpers.uid();
		data.total = 14;

		_res.json(data.$json());
	},

	schema: function (_req, _res) {
		_res.json(require('../models/eventcount.model.json'));
	}

});