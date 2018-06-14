var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('logger');
var session = require('express-session');
var passport = require('passport');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var usersController = require('./controllers/users');
var util = require('util')


require('./config/passport')(passport)


// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser());
app.use(bodyParser());

app.use(function(req, res, next) {
  res.locals.currentUser = req.user
  next()
})

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use('/', usersController)

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port', () => console.log("server is running")))

module.exports = app;
