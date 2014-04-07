var app = require('../app');

module.exports = app.class.model.extend({

	init: function () {
		this.model = new app.modules.moldy('event', require('./event.model.json'));
	}

});