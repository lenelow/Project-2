var LocalStrategy = require('passport-local').Strategy
var User = require('../models/users')

module.exports = function(passport) {
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // pass request to callback function
    }, function(req, email, password, done) {
        User.findOne({ email }, function(err, user) {
            if(err) { return done(err) }

            if(user) {
                return done(null, false, req.flash('signupMessage', 'This email is already in use'))
            }

            else {
                let newUser = new User();
                newUser.email = email;
                newUser.password = newUser.encrypt(password);

                newUser.save(function(err) {
                    if(err) throw err;
                    return done(null, newUser)
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
        return done(null, false, req.flash('loginMessage', 'Wrong Password'))
    }

    return done(null, user)
}
))

passport.serializeUser(function(user, done) {
    done(null, user.id)
})

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user)
    })
})

}

