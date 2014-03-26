var cmi = require('./cmi');

module.exports = function (_app) {
	var app = _app,
		event = new(require('./routes/event.route'))(),
		eventcount = new(require('./routes/eventcount.route'))();

	/* Events */
	app.get('/event', event.get);
	app.get('/event/:id', event.get);
	app.post('/event', event.post);

	/* Event Count */
	app.get('/eventcount', eventcount.get);

}