var app = require('../app');

module.exports = app.class.base.extend({

	get: function (_req, _res) {
		new app.model[this.name]().model
			.$get({
				id: _req.params.id || null
			}, function (_error, _data) {
				_res.json(_data && _data.$json() || _error || {});
			});
	},

	put: function (_req, _res) {
		new app.model[this.name]().model
			.$data(_req.body)
			.$save(function (_error, _data) {
				_res.json(_data && _data.$json() || _error || {});
			});
	},

	schema: function (_req, _res) {
		_res.json(require('../models/' + this.name + '.model.json'));
	}

});