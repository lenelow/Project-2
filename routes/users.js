const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.js')

router.get('/singup/new', userController.new)//render signup form
router.post('/signup', userController.create)//add new account to database
router.get('/login/new', userController.new)//render login form
//show create profile/settings form if first time loggin in, otherwise show user index
router.delete('/user/:id', userController.destroy)//delete account from database
//send message
//search

module.exports = router;