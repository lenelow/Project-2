const Dog = require('../models/dogs')
const User = require('../models/users')

module.exports = { // object of functions for routes
  showUsersDogs: (req, res) => { // see all of a user's dogs
    User.findById(req.user.id)
      .then(function (user) {
        res.render('showUsersDogs', {dogs: user.dogs})
      })
  },
  show: (req, res) => { // see all dogs
    Dog.find({}).then(function (dog) {
      res.render('dogIndex', { dogs: dog })
    })
  },
  showDog: (req, res) => { // shows one dog
    Dog.findById(req.params.id).populate('user').then(dog => {
      res.render('showDog', {dogs: dog})
    })
  },
  editForm: (req, res) => { // renders edit dog form
    res.render('dogForm')
  },
  edit: (req, res) => {
    Dog.findByIdAndUpdate(req.params.id, req.body.dogs).then(dog => { // handles edit dog form
      User.findById(req.user.id)
        .then(function (user) {
          user.dogs.push(req.body.dogs)
          user.save().then(user => {
            res.redirect('users/show')
          })
        })
    })
  },

  // render add dog form
  createForm: (req, res) => {
    res.render('dogForm')
  },

  create: (req, res) => { // handles add dog
    var dogFields = {}
    dogFields.user = req.user.id
    dogFields.name = req.body.name
    dogFields.weight = req.body.weight
    dogFields.age = req.body.age
    dogFields.breed = req.body.breed
    dogFields.avatar = req.body.avatar
    dogFields.additionalInfo = req.body.additionalInfo

    Dog.create(dogFields).then(dogs => {
      req.user.dogs.push(dogs)
      req.user.save().then(user => {
        res.redirect('users/dogs')
      })
    })
  },
  destroy: (req, res) => { // Handle dog delete (button--no form necessary)
    Dog.findByIdAndRemove(req.params.id)
      .then(() => {
        User.findById(req.user.id).then(user => {
          const removeDog = user.dogs
            .map(dog => dog.id) // turns dog into dog id
            .indexOf(req.params.id) // find index of dog with that id
          user.dogs.splice(removeDog, 1) // removes that dog specifically
          user.save().then(() => {
            res.redirect('/profile/:id')
          })
        })
      })
  }
}
