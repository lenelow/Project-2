const express = require('express')
const router = express.Router()
const dogController = require('../controllers/dogs.js')

router.get('/', dogController.show)// browse dog profiles
router.get('/new', dogController.createForm)// render form for adding new dog to account
router.post('/', dogController.create)// add new dog to database
router.get('/:id/edit', dogController.editForm)// render form for editing dog profile
router.put('/:id', dogController.edit)// update dog profile in database
router.delete('/:id', dogController.destroy)// delete dog profile from database
router.get('/:id', dogController.showDog)// show specific dog
router.get('/user', dogController.showUsersDogs)// show all of a user's dogs


module.exports = router
