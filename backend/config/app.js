var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
let cors = require('cors');

var indexRouter = require('../routes/index.router');
var usersRouter = require('../routes/users.router');
var adsRouter = require('../routes/ads.router');


var app = express();

// Enable cors
app.use(cors());
app.options('*', cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//using session secret
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: "sessionSecret"
}));

app.options('/*', (_, res) => {
  res.sendStatus(200);
});

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

// setting up the passport
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
require('./passport')(passport);

//routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ads', adsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, "Endpoint not found."));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.json(
    {
      success: false,
      message: err.message
    }
  )
});

module.exports = app;
