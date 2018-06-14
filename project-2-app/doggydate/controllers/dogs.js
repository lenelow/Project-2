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
    }
    // Display profile create form (add dog to account)
    exports.add_dog_get = function(req, res, next) {       
        res.render('addDog_form', { title: 'Add Dog'});

    // Handle profile create 
    

    // Display edit profile form (change details, photos) 
    exports.edit_dog_get = function(req, res, next) {       
        res.render('editDog_form', { title: 'Edit Dog'});

    // Handle profile update 
       
   
    // Handle dog delete (button--no form necessary)
}