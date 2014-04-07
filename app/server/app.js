var app = exports;

/* Core */
app.config = require('./config.json');
app.environment = require('./environment');
app.helpers = require('./helpers');
app.modules = require('./modules');

/* Classes */
app.class = {};
app.class.base = require('./classes/base.class');
app.class.model = require('./classes/model.class');
app.class.route = require('./classes/route.class');

/* Models */
app.model = {};
app.model.event = require('./models/event.model');
app.model.eventcount = require('./models/eventcount.model');
app.model.guest = require('./models/guest.model');

/* Middleware */
app.modules.moldy.use(require('moldy-file-adapter'));