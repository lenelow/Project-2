const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.js')

router.get('/', userController.goHome)// go home
router.get('/signup/new', userController.signUpForm)// render signup form
router.post('/signup', userController.signUp)// add new account to database and redirect to profile create
router.get('/login', userController.loginForm)// render login form
router.post('/login', userController.login)// handle login inf(home page or error)
router.get('/logout', userController.logout)// log out

//search

module.exports = router;