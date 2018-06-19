const express = require('express');
const router = express.Router();

// GET home page.
router.get('/', function(req, res) {
  console.log('here')
  res.render('index')
});

router.use('/users', require('./users'))
router.use('/dogs', require('./dogs'))
router.use('/profiles', require('./profiles'))

module.exports = router;



// router.use((req, res, next) => {
//   res.locals.currentUser = req.user;
//   next();
// });

// router.use('/', require('./application.js'));
// router.use('/user', require('./user'));
// router.use('/tweet', require('./tweet'));

// router.all('*', (req, res) => {
//   res.status(400).send();
// });

// module.exports = router;
