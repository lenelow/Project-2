const Dog = require("../models/dogs");
const User = require("../models/users");
const Profile = require("../models/profiles");
const fileUpload = require("express-fileupload");

let Dogs = Dog.Dog;
module.exports = {
  // object of functions for routes
  showUsersDogs: (req, res) => {
    // see all of a user's dogs
    User.findById(req.user._id).then(function(user) {
      res.render("users/showUserDogs", { dogs: user.dogs, user: user });
    });
  },
  show: (req, res) => {
    // show all dogs
    Dogs.find(makeQuery(req)).then(function(dog) {
      Profile.findOne({ user: req.user.id }).then(function(profile) {
        res.render("dogs/index", { dogs: dog, id: profile._id });
        console.log(dog);
      });
    });
  },
  showDog: (req, res) => {
    // show one dog
    Dogs.findById(req.params.id)
      .populate("user")
      .then(dog => {
        Profile.findOne({ user: dog.user }).then(function(profile) {
          res.render("dogs/show", { dogs: dog, id: profile._id });
        });
      });
  },
  editForm: (req, res) => {
    // renders edit dog form
    res.render("dogs/dogForm");
  },
  edit: (req, res) => {
    Dogs.findByIdAndUpdate(req.params.id, req.body.dogs).then(dog => {
      // handles edit dog form
      User.findById(req.user._id).then(function(user) {
        user.dogs.push(req.body.dogs);
        user.save().then(user => {
          res.redirect("profiles/show");
        });
      });
    });
  },

  // render add dog form
  createForm: (req, res) => {
    res.render("dogs/dogForm");
  },

  create: (req, res) => {
    // handles add dog
    console.log(req.file.avatar);
    var dogFields = {};

    dogFields.user = req.user._id;
    dogFields.name = req.body.name;
    dogFields.weight = req.body.weight;
    dogFields.age = req.body.age;
    dogFields.breed = req.body.breed;
    dogFields.avatar = req.file.filename;
    dogFields.additionalInfo = req.body.additionalInfo;

    Dogs.create(dogFields).then(dogs => {
      req.user.dogs.push(dogs);
      req.user.save().then(user => {
        res.redirect("dogs/user");
      });
    });
  },
  destroy: (req, res) => {
    // Handle dog delete (button--no form necessary)
    Dogs.findByIdAndRemove(req.params.id).then(() => {
      User.findById(req.user._id).then(user => {
        const removeDog = user.dogs
          .map(dog => dog.id) // turns dog into dog id
          .indexOf(req.params.id); // find index of dog with that id
        user.dogs.splice(removeDog, 1); // removes that dog specifically
        user.save().then(() => {
          res.redirect("/profile/:id");
        });
      });
    });
  },
  search: (req, res) => {
    Dogs.find({}).then(function(dog) {
      Profile.findOne({ user: req.user.id }).then(function(profile) {
        res.render("dogs/index", { dogs: dog, id: profile._id });
        console.log(dog);
      });
    });
  },
  requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/");
    }
  }
};

const makeQuery = req => {
  const query = {};
  if (req.query) {
    query.$text = { $search: req.query.search };
  }
  return query;
};
