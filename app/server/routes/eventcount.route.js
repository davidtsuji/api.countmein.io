var cmi = require('../cmi');

module.exports = cmi.class.route.extend(function () {

}).methods({

	get: function (_req, _res) {
		var data = new cmi.model.eventcount().model;
		data.total = 14;
		_res.json(data.json());
	}

});