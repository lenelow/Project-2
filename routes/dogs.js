const express = require('express')
const router = express.Router()
const dogController = require('../controllers/dogs.js')
const multer = require('multer')
const upload = multer({ dest: './public/images' })


router.get('/', dogController.requireAuth, dogController.show)// browse dog profiles
router.get('/new', dogController.requireAuth, dogController.createForm)// render form for adding new dog to account
router.get('/user', dogController.requireAuth, dogController.showUsersDogs)// show all of a user's dogs
router.post('/', dogController.requireAuth, upload.single('avatar'), dogController.create)// add new dog to database
router.get('/:id/edit', dogController.requireAuth, dogController.editForm)// render form for editing dog profile
router.put('/:id', dogController.requireAuth, dogController.edit)// update dog profile in database
router.delete('/:id', dogController.requireAuth, dogController.destroy)// delete dog profile from database
router.get('/:id', dogController.requireAuth, dogController.showDog)// show specific dog


module.exports = router
