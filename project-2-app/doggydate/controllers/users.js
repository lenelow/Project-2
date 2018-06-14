var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport')

// GET /
router.get('/', (req, res) => {
    res.render('index')
})

// GET /signup
router.get('/signup', (req, res) => {
    res.render('signup', { message: req.flash('signupMessage')})
})

// POST /signup
router.post('/signup', (req, res) => {
    var signupStrategy = passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    })
    return signupStrategy(req, res)
})

//create profile/account

// GET /login
router.get('/login', (req, res) => {
    res.render('login', { message: req.flash('loginMessage')})
})

// POST /login
router.post('/login', (req, res) => {
    var loginProperty = passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        loginProperty: true
    })
    return loginProperty(req, res)
})

// GET /logout
router.get('/logout', (req, res) => {
})

// Restricted (cool people only!)
router.get('/secret', (req, res) => {
})

module.exports = router
 
// delete account 