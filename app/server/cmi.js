var cmi = exports;

/* Core */
cmi.config = require('./config.json');
cmi.environment = require('./environment');
cmi.helpers = require('./helpers');
cmi.modules = require('./modules');

/* Classes */
cmi.class = {};
cmi.class.base = require('./classes/base.class');
cmi.class.model = require('./classes/model.class');
cmi.class.route = require('./classes/route.class');

/* Models */
cmi.model = {};
cmi.model.event = require('./models/event.model');
cmi.model.eventcount = require('./models/eventcount.model');