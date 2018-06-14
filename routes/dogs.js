const express = require('express');
const router = express.Router();
const dogController = require('../controllers/dogs.js');

router.get('/dogs', dogController.index)//browse dog profiles
router.get('/dog/new', userController.new)//render form for adding new dog to account
router.post('/dog/', dogController.create)//add new dog to database
router.get('/dog/:id/edit', userController.edit)//render form for editing dog profile
router.put('/dog/:id', userController.update)//update dog profile in database
router.delete('/dog/:id', userController.destroy)//delete dog profile from database
router.get('/dog/:id', userController.show)//show specific dog
//search dog database

module.exports = router;