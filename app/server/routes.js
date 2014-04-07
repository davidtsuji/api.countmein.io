module.exports = function (_app) {
	var app = _app,
		event = new(require('./routes/event.route'))(),
		eventcount = new(require('./routes/eventcount.route'))(),
		guest = new(require('./routes/guest.route'))();

	/* Events */
	app.get('/event/schema', event.schema.bind(event));
	app.get('/event', event.get.bind(event));
	app.get('/event/:id', event.get.bind(event));
	app.put('/event/:id', event.put.bind(event));
	app.post('/event', event.post.bind(event));

	/* Event Count */
	app.get('/eventcount/schema', eventcount.schema.bind(eventcount));
	app.get('/eventcount', eventcount.get.bind(eventcount));

	/* Guests */
	app.get('/guest/schema', guest.schema.bind(guest));
	app.get('/guest', guest.get.bind(guest));

};