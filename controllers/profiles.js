const Profile = require("../models/profiles")

module.exports = {
// display user profile
    show: (req, res) => {
        Profile.findOne({ user: req.params.id })
        .populate("user", ['name', 'avatar'])
        .then(function(profile){
            res.render("profiles/show", { profile })
        })
    }

 // Display accounts for browsing


 // Display profile create form 
    // add photo
    // add information/preferances



 // Handle profile create

 // Display edit profile form
    //change photo
    //edit info
 

 // Handle edit profile


 // Send message
 

 // search user database
}