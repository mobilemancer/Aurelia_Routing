var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    merge = require('merge');
 
var webroot = "wwwroot";
     
var paths = {
    tsSource: './aurelia_logic/**/*.ts',
    tsOutput: "./" + webroot + "/app",
    tsDef: "./typings/"
};
 
var tsCompilerConfig = ts.createProject('tsconfig.json');
 
gulp.task('ts-compile', function () {
    var tsResult = gulp.src(paths.tsSource)
        .pipe(ts(tsCompilerConfig));
 
    return merge([
        tsResult.dts.pipe(gulp.dest(paths.tsDef)),
        tsResult.js.pipe(gulp.dest(paths.tsOutput))
    ]);
});
 
gulp.task('watch', ['ts-compile'], function () {
    gulp.watch(paths.tsSource, ['ts-compile']);
});