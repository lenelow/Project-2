const Dog = require("../models/dogs");
const User = require("../models/users")

module.exports = {
    showUsersDogs: (req, res) => {
        User.findOne({ _id: req.params.id })
        .then(function(user){
            res.render('usersDogs/index', {dogs: user.dogs})
        })
    },
    show: (req, res) => {
        Dog.find({}).then(function(dog) {
            res.render('dogs/index', { dogs: dog })
        })
    },
    showDog: (req, res) => {
        Dog.findById(req.params.id).populate('user').then(dog =>{
            res.render('dogs/show', {dogs: dog})
        })
    },
    editForm: (req, res) => {
        res.render('dogForm')
    },
    edit: (req, res) => {
        Dog.findByIdAndUpdate(req.params.dogsId, req.body.dogs).then(dog => {
            User.findOne({ _id: req.params.userId })
            .then(function(user){
              user.dogs.push(req.body.dogs)
              user.save().then(user =>{
                  res.redirect('users/show')
              })
            })
        })
    },
    create: (req, res) => {
        var dogFields = {};
        dogFields.user = req.user.id;
        dogFields.name = req.body.name;
        dogFields.weight = req.body.weight;
        dogFields.age = req.body.age;
        dogFields.breed = req.body.breed;
        dogFields.avatar = req.body.avatar;
        dogFields.additionalInfo = req.body.additionalInfo;

        Dog.create(dogFields).then(dogs =>{
            req.user.dogs.push(dogs);
            req.user.save().then(user =>{
                res.redirect('users/dogs')
            })
        })
    }
    // Display profile create form (add dog to account)
    // exports.add_dog_get = function(req, res, next) {       
    //     res.render('addDog_form', { title: 'Add Dog'});

    // Handle profile create 
    

    // Display edit profile form (change details, photos) 
    // exports.edit_dog_get = function(req, res, next) {       
    //     res.render('editDog_form', { title: 'Edit Dog'});

    // Handle profile update 
       
   
    // Handle dog delete (button--no form necessary)
}