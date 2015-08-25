'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var path = require('path');

function importTask(name, requisites) {
  var taskPath = path.resolve(__dirname, 'config/gulp/' + name + '/' + name + '.task.js');
  var config = require(taskPath)(gulp, plugins);

  if (requisites) {
    gulp.task(name, requisites, config);
  } else {
    gulp.task(name, config);
  }
}

importTask('lint');
