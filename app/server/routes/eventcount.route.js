var app = require('../app');

module.exports = app.class.route.extend({

	init: function () {
		this._super();
		this.name = 'eventcount';
	},

	get: function (_req, _res) {
		var eventCount = new app.model.eventcount().model;

		new app.model.event().model
			.$collection(function (_error, _data) {
				eventCount.total = !_error && _data && _data.length || 0;
				_res.json(_error || eventCount.$json());
			});
	}

});