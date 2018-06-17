const express = require('express');
const router = express.Router();
const dogController = require('../controllers/dogs.js');

router.get('/dogs', dogController.show)//browse dog profiles
router.get('/dog/new', dogController.createForm)//render form for adding new dog to account
router.post('/dog/', dogController.create)//add new dog to database
router.get('/dog/:id/edit', dogController.editForm)//render form for editing dog profile
router.put('/dog/:id', dogController.edit)//update dog profile in database
router.delete('/dog/:id', dogController.destroy)//delete dog profile from database
router.get('/dog/:id', dogController.showDog)//show specific dog
router.get('/dog/user', dogController.showUsersDogs)//show all of a user's dogs
//search dog database

module.exports = router;