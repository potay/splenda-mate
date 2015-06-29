// Dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Route Requires
var routes = require('./routes/index');
var users = require('./routes/users');
var bills = require('./routes/bills');
var cashflow = require('./routes/cashflow');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Database (MongoDB)
var db_user = 'splenda-mate';
var db_pass = 'diamonddaddy';
var db_host = 'ds045632.mongolab.com';
var db_port = '45632';
var db_name = 'splenda-mate';
var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://'+db_user+':'+db_pass+'@'+db_host+':'+db_port+'/'+db_name);

// Make database accessible to our router
app.use(function(req,res,next){
  req.db = db;
  next();
});

// Routes
app.use('/', routes);
app.use('/users', users);
app.use('/bills', bills);
app.use('/cashflow', cashflow);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
