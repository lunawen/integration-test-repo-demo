"use strict";

let gulp = require("gulp");
let jshint = require("gulp-jshint");

gulp
    .task("jshint", gulp.series(() => {
        return gulp
            .src("./*.js")
            .pipe(jshint())
            .pipe(jshint.reporter("default"));
    }));
gulp
    .task("test", gulp.series(() => {
        require("./test.js");
    }));
gulp
    .task("serve", gulp.series(() => {
        require("./main.js");
    }));

gulp.task("default", gulp.series("jshint", "serve", "test"));