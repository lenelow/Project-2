var LocalStrategy = require('passport-local').Strategy
var User = require('../models/users')

module.exports = function(passport) {
    passport.serializeUser(function(user, callback) {
        callback(null, user.id)
    })
    
    passport.deserializeUser(function(id, callback) {
        User.findById(id, function(err, user) {
            callback(err, user)
        })
    })

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        nameField: 'name',
        avatarField: 'avatar',
        dogField: 'dogs'
        passReqToCallback: true // pass request to callback function
    }, function(req, email, password, callback) {
        User.findOne({ email }).then(user => {
            if (user) {
                return callback(null, false, 
                req.flash("signupMessage", "this email is already taken"))
            } else {
                let newUser = new User();
                newUser.email = email;
                newUser.password = newUser.encrypt(password);
                newUser.name = name;
                newUser.avatar = req.file.filename;
                newUser.dogs = [];
            

                newUser.save(function(err) {
                    if(err) throw err;
                        return callback(null, newUser,
                        req.flash("errorMessage", "error"))
                    }
                }) 
            }

        })
    }
    ))

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, done) {
    User.findOne({ email }), function(err, user) {
        if(err) {
            return done(err)
        }
    }

    if(!user) {
        return done(null, false, req.flash('loginMessage', 'No user exists with that email'))
    }
    if(!user.validPassword(password)) {
        return done(null, false, req.flash('loginMessage', 'Wrong password. Try again.'))
    }

    return done(null, user)
}
))

}

