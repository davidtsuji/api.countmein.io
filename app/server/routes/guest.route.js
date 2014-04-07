var app = require('../app');

module.exports = app.class.route.extend({

	init: function () {
		this._super();
		this.name = 'guest';
	},

	post: function (_req, _res) {
		var data = new app.model.event().model;
		data.id = app.helpers.uid();
		data.$data(_req.body);
		data.$save(function (_error) {
			console.log(_error);
			_res.json(data.$json());
		});
	}

});