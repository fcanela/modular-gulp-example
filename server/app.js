'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.json('');
});

app.listen(3000, '0.0.0.0', function() {
  console.log('Service running on port 3000');
});

exports = module.exports = app;

