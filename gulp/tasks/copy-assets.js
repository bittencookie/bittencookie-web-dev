var gulp = require('gulp');

module.exports = function () {
    var assets = {
        css: ['./node_modules/normalize.css/normalize.css']
    };
    
    Object.keys(assets).forEach(function (type) {
        gulp.src(assets[type]).pipe(gulp.dest('./public/'+type));
    });
};
