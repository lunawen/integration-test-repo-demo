// "use strict";

// let gulp = require("gulp");
// let jshint = require("gulp-jshint");

// gulp
//     .task("jshint", gulp.series(() => {
//         return gulp
//             .src("./*.js")
//             .pipe(jshint())
//             .pipe(jshint.reporter("default"));
//     }));
// gulp
//     .task("test", gulp.series(() => {
//         require("./test.js");
//     }));
// gulp
//     .task("serve", gulp.series(() => {
//         require("./main.js");
//     }));

// gulp.task("default", gulp.series("jshint", "serve", "test"));


const { src, dest, series } = require('gulp');
const del = require('del');

const origin = 'src';
const destination = 'build';

async function clean(cb) {
    await del(destination);
    cb();
}

function js(cb) {
    src("./*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
    cb();
}

function test(cb) {
    require("./test.js");
    cb();
}

function serve(cb) {
    require("./main.js");
    cb();
}

exports.default = series(clean, js, serve, test);
exports.test = test;