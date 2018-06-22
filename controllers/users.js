// const User = require('../models/users')
const passport = require('passport')
require('../config/passport')(passport)

module.exports = {
  // go home
  goHome: (req, res) => {
    res.render('index')
  },

  // render sign up form
  signupForm: (req, res) => {
    res.render('users/signup', { message: req.flash('signupMessage') })
  },

  // handle signup
  signup: (req, res) => {
    var signupStrategy = passport.authenticate('local-signup', {
      successRedirect: '/profiles/new',
      failureRedirect: '/users/signup',
      failureFlash: true
    })
    return signupStrategy(req, res)
  },

  // render login form
  loginForm: (req, res) => {
    res.render('users/login', { message: req.flash('loginMessage') })
  },

  // handle login login
  login: (req, res, next) => {
    var loginProperty = passport.authenticate('local-login', {
      successRedirect: '/',
      failureRedirect: '/users/login',
      failureFlash: true
    })
    return loginProperty(req, res, next)
  },

  // GET /logout
  logout: (req, res) => {
    req.logout()
    res.redirect('/')
  }

  // search

}
