const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profiles')

router.get('/profile/new', profileController.new)//render create profile form
router.post('/profile', profileController.create)//add new account to database//add profile information/preferences to database
router.get('/profile/:id/edit', profileController.edit)//render edit profile form
router.put('/profile/:id', profileController.update)//update profile information in database

module.exports = router;