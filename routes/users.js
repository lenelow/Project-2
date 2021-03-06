const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

router.get('/', userController.goHome)// go home
router.get('/login', userController.loginForm)// render login form
router.post('/', userController.login)// handle login inf(home page or error)
router.get('/signup', userController.signupForm)// render signup form
router.post('/signup', userController.signup)// add new account to database and redirect to profile create
router.get('/logout', userController.logout)// log out

// search

module.exports = router
