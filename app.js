/*
 * Module dependencies
 */
var express = require('express');
var logger = require('morgan');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', {
    title : 'Home'
  });
});
app.listen(3000);
