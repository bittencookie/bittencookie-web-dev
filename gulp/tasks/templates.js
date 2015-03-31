var gulp = require('gulp');
var jade = require('gulp-jade');
var templateCache = require('gulp-angular-templatecache');

module.exports = function () {
    gulp.src('frontend/views/index.jade')
        .pipe(jade())
        .pipe(gulp.dest('public'));

    gulp.src('frontend/views/*.jade')
        .pipe(jade({
            //client: true
        }))
        .pipe(templateCache({
            module: 'sos-shake'
        }))
        .pipe(gulp.dest('public/js'));
};
