'use strict';

var rules = require('./config.json');

module.exports = function(gulp, plugins) {
  return function() {
    gulp.src(['*.js', 'config/**/*.js', 'server/**/*.js'])
      .pipe(plugins.eslint(rules))
      .pipe(plugins.eslint.format());
  };
};
