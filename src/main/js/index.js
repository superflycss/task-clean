//==================================================
//  TASK
//  clean
//  Deletes the `./target` directory
//==================================================

var del = require('del');
var gulp = require('gulp');
var PLI = require('@superflycss/pli');

gulp.task('clean', function(cb) {
  return del([PLI.TARGET], cb);
});
