var cmi = require('../cmi');

module.exports = cmi.class.route.extend(function () {

}).methods({

	get: function (_req, _res) {
		var data = new cmi.model.event().model;
		data.id = 'wat';
		_res.json(data.json());
	},

	post: function (_req, _res) {
		var data = new cmi.model.event().model;
		data.id = cmi.helpers.uid();
		_res.json(data.json());
	}

});