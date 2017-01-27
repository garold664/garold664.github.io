"use strict";

var gulp = require('gulp'),
    htmlcomb = require('gulp-htmlcomb');
 
gulp.task('htmlcomb', function () {
  return gulp.src('*.html')
  .pipe(htmlcomb())
  .pipe(gulp.dest('.'));
});
