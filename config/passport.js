var LocalStrategy = require('passport-local').Strategy
var User = require('../models/users')

module.exports = function (passport) {
  passport.serializeUser(function (user, callback) {
    callback(null, user.id)
    console.log(user._id) 
  })

  passport.deserializeUser(function (id, callback) {
    User.findById(id, function (err, user) {
      callback(err, user)
      console.log(user._id) 
      console.log('stuff: ',id) 
    })
  })

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    nameField: 'name',
    avatarField: 'avatar',
    dogField: 'dogs',
    passReqToCallback: true // pass request to callback function
  }, function (req, email, password, callback) {
    User.findOne({ email }, function (err, user) {
      if (err) return callback(err)
      if (user) {
        return callback(null, false,
          req.flash('signupMessage', 'This email is already taken'))
      } else {
        let newUser = new User()
        newUser.email = email
        newUser.password = newUser.encrypt(password)
        newUser.name = req.body.name
        newUser.avatar = req.body.avatar
        newUser.dogs = []
    

        newUser.save(function (err) {
          if (err) throw err
          return callback(null, newUser, req.flash('errorMessage', 'error'))
        })
      }
    })
  })
)

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, email, password, callback) {


    
    User.findOne({ email })
      .then(function (user) {
        console.log('i am here')
        console.log(user)

        if (!user) {
          return callback(null, false, req.flash('loginMessage', 'No user exists with that email'))
        }
        if (!user.validPassword(password)) {
          return callback(null, false, req.flash('loginMessage', 'Wrong password. Try again.'))
        }

        return callback(null, user)
      })
  })
  )
}
