/**
 * Module dependencies.
 */

var express = require('express'),
	http = require('http'),
	path = require('path'),
	app = express(),
	cors = require('cors'),
	initRoutes = require('./routes');

// all environments
app.set('port', process.env.PORT || 3050);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(cors());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

initRoutes(app);

http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
	console.log('Current directory: ' + process.cwd());
	console.log('Current __dirname: ' + __dirname);
});