var cmi = require('../cmi');

module.exports = cmi.class.model.extend(function () {

	this.model = new cmi.modules.model('eventcount')
		.property('total', {
			type: 'number'
		});

});