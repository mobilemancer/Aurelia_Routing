var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    merge = require('merge'),
    flatten = require('gulp-flatten');
 
var webroot = "wwwroot";
     
var paths = {
    appSource: './app/**/*.ts',
    appHtml: './app/**/*.html',
    appDest: "./" + webroot,
    tsDef: "./typings/"
};
 
var tsCompilerConfig = ts.createProject('tsconfig.json');
 
gulp.task('ts-compile', function () {
    var tsResult = gulp.src(paths.appSource)
        .pipe(ts(tsCompilerConfig));
 
    return merge([
        tsResult.dts.pipe(gulp.dest(paths.tsDef)),
        tsResult.js.pipe(gulp.dest(paths.appDest))
    ]);
});
 
 gulp.task('copy-html', function(){
    gulp.src(paths.appHtml)
        .pipe(gulp.dest(paths.appDest)); 
 });
 

 
gulp.task('default', ['ts-compile', 'copy-html']);

gulp.task('watch', ['ts-compile'], function () {
    gulp.watch(paths.appSource, ['ts-compile']);
});