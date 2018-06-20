var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('logger')
var session = require('express-session')
var passport = require('passport')
var bodyParser = require('body-parser')
var flash = require('req-flash')
var multer = require('multer')
var upload = multer({ dest: 'upload/' })
var hbs = require('hbs')

var router = require('./routes/index')

require('./config/passport')(passport)

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(session({
  secret: 'DOG-EAT-DOG-WORLD',
  resave: false,
  saveUninitialized: true
})) // session middleware
app.use(require('flash')())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser())

app.use(function (req, res, next) {
  res.locals.currentUser = req.user
  next()
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.use(router)

var port = process.env.PORT || 4000;
app.listen(port, () => console.log('server is running'));
