var gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create(),
    reload      = browserSync.reload;
 
 
//////////////////////////////////
/////////// TYPESCRIPT ///////////
//////////////////////////////////
gulp.task('build:ts', function () {
	return gulp.src('ts/**/*.ts')
        .pipe(plugins.plumber())
		.pipe(plugins.typescript())
		.pipe(gulp.dest('js/'))
        .pipe(browserSync.stream());
});

//////////////////////////////////////
/////////// WATCH and SYNC ///////////
//////////////////////////////////////
gulp.task('watch', function() {
    gulp.watch(['ts/**/*.ts'],  ['build:ts'] );
});
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://localhost:8080/"
    });
});


////////////////////////////////////
/////////// DEFAULT TASK ///////////
////////////////////////////////////
gulp.task('default', ['browser-sync', 'watch']);