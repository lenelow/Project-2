const express = require('express')
const router = express.Router()

// GET home page.
router.get('/', function (req, res) {
  console.log('here')
  res.render('index')
})

router.use('/users', require('./users'))
router.use('/dogs', require('./dogs'))
router.use('/profiles', require('./profiles'))

router.use((req, res, next) => {
  res.locals.currentUser = req.user
  next()
})

module.exports = router




