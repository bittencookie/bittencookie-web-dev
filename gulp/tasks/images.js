var gulp = require('gulp');

module.exports = function () {
    gulp.src('./frontend/images/**/*')
        .pipe(gulp.dest('public/img/'));
};
