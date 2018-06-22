const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')
const multer = require('multer')
const upload = multer({ dest: './public/images' })

router.get('/', userController.goHome)// go home
router.get('/login', userController.loginForm)// render login form
router.post('/', userController.login)// handle login inf(home page or error)
router.get('/logout', userController.logout)// log out
router.get('/signup', userController.signupForm)// render signup form
router.post('/signup', upload.single('avatar'), userController.signup)// add new account to database and redirect to profile create

// search

module.exports = router
