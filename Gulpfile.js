'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const jsdoc = require('gulp-jsdoc3');
const jshint = require('gulp-jshint');
const jasmine = require('gulp-jasmine');
const src = './index.js';


//======================================================================== Tasks
gulp.task('doc', done => {
    gulp.src(['README.md', src], {read: true})
        .pipe(jsdoc(done));
});


/*
 Linting
 */
gulp.task('lint', () => {
    return gulp.src(src)
        .pipe(jshint('.jshintrc'))
        // You can look into pretty reporters as well, but that's another story
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});


/*
 Test task
 */
gulp.task('test', () => {
    gulp.src('test/spec/*.js')
    .pipe(jasmine());
});



gulp.task('default', ['lint', 'test', 'doc'], done => {
    done();
});

