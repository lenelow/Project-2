const User = require('../models/users')
var passport = require('passport')

module.exports = {
  // go home
  goHome: (req, res) => {
    res.render('index')
  },

  // render sign up form
  signUpForm: (req, res) => {
    res.render('users/signup', { message: req.flash('signupMessage') })
  },

  // handle signup
  signUp: (req, res) => {
    var signupStrategy = passport.authenticate('local-signup', {
      successRedirect: '/profile/new',
      failureRedirect: '/signup',
      failureFlash: true
    })
    return signupStrategy(req, res)
  },

  // render login form
  loginForm: (req, res) => {
    res.render('users/login', { message: req.flash('loginMessage') })
  },

  // handle login login
  login: (req, res) => {
    var loginProperty = passport.authenticate('local-login', {
      successRedirect: '/',
      failureRedirect: '/login',
      loginProperty: true
    })
    return loginProperty(req, res)
  },

  // GET /logout
  logout: (req, res) => {
    req.logout()
    res.redirect('/')
  }

  // search

}

module.exports = {
  getLogin: loginForm,
  postLogin: login,
  getSignup: signupForm,
  postSignup: signup,
  getLogout: logout,
};
