var gulp = require('gulp');
var server = require('gulp-webserver');
var inject = require('gulp-inject');
var filesort = require('gulp-angular-filesort');
var series = require('stream-series');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var source = require('gulp-sourcemaps');
var merge = require('gulp-merge');
var gulpif = require('gulp-if');
var lazypipe = require('lazypipe');
var runSequence = require('run-sequence');

gulp.task('inject', function () {
    return gulp.src('src/index.html')
        .pipe(inject(
            gulp.src('src/js/app/**/*.js').pipe(filesort()), { relative: true }
        ))
        .pipe(gulp.dest('src/'));
});

gulp.task('server', ['watch'], function () {
    gulp.src('src')
        .pipe(server({
            livereload: true
        }));

});

gulp.task('server2', function () {
    gulp.src('dist')
        .pipe(server({
            livereload: true
        }));

});

gulp.task('html', function () {
    return gulp.src('src/index.html')
        .pipe(useref({}, lazypipe().pipe(source.init)))
        .pipe(gulpif('*.js', uglify()))
        .pipe(source.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('move', function () {
    return gulp.src('src/templates/**/*.*')
        .pipe(gulp.dest('dist/templates'));
});

gulp.task('prod', function () {
    runSequence('html', 'move');
});
// .pipe(useref({}, lazypipe().pipe(sourcemaps.init, { loadMaps: true })))

gulp.task('watch', function () {
    gulp.watch('src/js/app/**/*.js', ['inject']);
});

gulp.task('dev:server', ['inject', 'server']);

//   .pipe(inject(gulp.src('./src/**/*.js', { read: false }), { relative: true }))