const Profile = require('../models/profiles')
const User = require('../models/users')

module.exports = {
  // display user profile
  show: (req, res) => {
    Profile.findOne({ user: req.params.id })
      .populate('user', ['name', 'avatar'])
      .then(function (profile) {
        res.render('profiles/show', { profile })
      })
  },

  new: (req, res) => { // render new profile form
    res.render('profiles/profileForm')
  },

  // Handle profile create
  create: (req, res) => {
    var profileFields = {}
    profileFields.user = req.user.id
    if (req.body.location) {
      profileFields.location = req.body.location
    }
    if (req.body.bio) {
      profileFields.bio = req.body.bio
    }
    if (req.body.interests) {
      profileFields.interests = req.body.interests
    }
    Profile.create(profileFields).then(() => {
      res.redirect('/users')
    })
  },

  // Display edit profile form
  editForm: (req, res) => {
    res.render('profiles/profileForm')
  },

  // Handle edit profile
  edit: (req, res) => {
    Profile.findOneAndUpdate({ user: req.user.id }, req.body.profile).then(profile => {
      res.redirect('/profiles/' + profile.id)
    })
  },
  // change photo
  editPhoto: (req, res) => {
    User.findByIdAndUpdate(req.user.id, req.user).then(user => {
      res.redirect('/users/' + user.id)
    })
  },

  // Send message
  // delete account
  deleteAccount: (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findByIdAndRemove(req.user.id).then(() => {
        res.redirect('/users')
      })
    })
  },

  requireAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    } else {
      res.redirect('/users')
    }
  }

}
