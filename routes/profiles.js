const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profiles')

router.get('/profile/:id', profileController.show)// display user profile
router.get('/profile/new', profileController.new)// render create profile form
router.post('/profile/', profileController.create)// add new account to database//add profile information/preferences to database
router.get('/profile/:id/edit', profileController.editForm)// render edit profile form
router.put('/profile/:id', profileController.edit)// update profile information in database
router.put('/profile/:id', profileController.editPhoto)// change photo
router.delete('/profile/:id', profileController.deleteAccount)// delete account

module.exports = router
