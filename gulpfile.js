var gulp = require('gulp'),
	cluster = require('cluster'),
	jshint = require('gulp-jshint'),
	jshintReporter = require("jshint-stylish"),
	shell = require('gulp-shell');

var worker;

gulp.task("jshint", function () {
	return gulp.src(["./app/server/**/*.js", "test/**/*.js"])
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));
});

gulp.task('test', ['jshint'], shell.task([
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
	gulp.watch(['./app/server/**/*'], ['test']);
	gulp.watch(['./test/**/*'], ['test']);
	gulp.watch(['./app/server/**/*'], ['server']);
	gulp.watch(['./gulpfile.js'], ['default']);
});

gulp.task('default', ['test']);
gulp.task('run', ['default', 'server', 'watch']);