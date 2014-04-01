var cmi = require('../cmi');

module.exports = cmi.class.route.extend(function () {

}).methods({

	get: function (_req, _res) {
		var data = new cmi.model.event().model;

		// Faux data
		data.id = _req.params.id;
		data.date = "30 March 2014";
		data.name = "Tuesday Futsal";
		data.organiserName = "David";
		data.time = "12:30PM";
		data.where = "Kelvin Grove";

		data.guests.push({
			name: 'David',
			email: 'david@flodge.com'
		});

		data.guests.push({
			name: 'Glen',
			email: 'glen.arrowsmith@gmail.com'
		});

		_res.json(data.$json());
	},

	put: function (_req, _res) {
		var data = new cmi.model.event().model;

		data
			.$data(_req.body)
			.$save(function (_error) {
				if (_error) throw _error;
				_res.json({});
			});
	},

	post: function (_req, _res) {
		var data = new cmi.model.event().model;
		data.id = cmi.helpers.uid();
		data.$data(_req.body);
		_res.json(data.$json());
	},

	schema: function (_req, _res) {
		_res.json(require('../models/event.model.json'));
	}

});