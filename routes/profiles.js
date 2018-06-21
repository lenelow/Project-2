const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profiles')

router.get('/:id', profileController.requireAuth, profileController.show)// display user profile
router.get('/new', profileController.requireAuth, profileController.new)// render create profile form
router.post('/', profileController.requireAuth, profileController.create)// add new account to database//add profile information/preferences to database
router.get('/:id/edit', profileController.requireAuth, profileController.editForm)// render edit profile form
router.put('/:id', profileController.requireAuth, profileController.edit)// update profile information in database
router.put('/:id', profileController.requireAuth, profileController.editPhoto)// change photo
router.delete('/:id', profileController.requireAuth, profileController.deleteAccount)// delete account

module.exports = router
