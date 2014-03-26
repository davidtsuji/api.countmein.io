var gulp = require('gulp'),
	cluster = require('cluster'),
	shell = require('gulp-shell'),
	path = require('path');

var worker;

gulp.task('test', shell.task([
	'npm test'
]));

gulp.task('server', function () {
	cluster.setupMaster({
		exec: "./app/server/index.js"
	});

	if (worker) {
		worker.kill();
	}
	worker = cluster.fork();
});

gulp.task('watch', function () {

	livereloadServer = require('gulp-livereload')();

	gulp.watch(['./test/**/*'], ['test']);
	gulp.watch(['./app/server/**/*'], ['server']);
	gulp.watch(['./gulpfile.js'], ['default']);
});

gulp.task('default', ['test']);
gulp.task('run', ['server', 'watch']);