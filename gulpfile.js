// "use strict";

// let gulp = require("gulp");
let jshint = require("gulp-jshint");

// gulp
//     .task("jshint", gulp.series(() => {
        
//     }));
// gulp
//     .task("test", gulp.series(() => {
//         require("./test.js");
//     }));
// gulp
//     .task("serve", gulp.series(() => {
//         require("./main.js");
//     }));

const { series, src } = require('gulp');
function js(cb){
    src("./*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
    cb();
}

function serve(cb){
    require("./main.js");
    cb();
}

function test(cb){
    require("./test.js");
    cb();
}

exports.default = series(js, serve);
exports.test = test;