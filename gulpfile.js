var gulp = require('./gulp')([
    'jslint',
    'browserify',
    'templates',
    'styles',
    'images',
    'copy-assets'
]);

var debug = require('debug')('terpsichore');
var nodemon = require('gulp-nodemon');
var jslint = require('gulp-jslint');

gulp.task('dev', ['jslint', 'browserify', 'templates', 'styles', 'images', 'copy-assets'], function () {
    'use strict';
    nodemon({
        script: 'app.js',
        ext: 'js',
        ignore: ['frontend/**', 'public/**'],
        env: { 'NODE_ENV': 'dev' }
    })
        .on('change', ['jslint'])
        .on('restart', function () {
            console.log('restarted');
        });
    gulp.watch(['frontend/views/*.jade'], ['templates']);
    gulp.watch(['frontend/scripts/**/*.js'], ['jslint', 'browserify']);
    gulp.watch(['frontend/styles/**/*.scss'], ['styles']);
});
