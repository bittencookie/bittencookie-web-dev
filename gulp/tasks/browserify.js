var browserify = require('gulp-browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

module.exports = function() {
    return gulp.src('./frontend/scripts/main.js')
            .pipe(browserify({
              debug : true
            }))
        .pipe(gulp.dest('./public/js/'))
};
