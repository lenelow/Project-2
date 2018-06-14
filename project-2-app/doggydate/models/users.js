const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const Dogs = require("./dogs")

const User = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    dogs: [Dogs]
});

User.methods.encrypt = function(password) { // hash the password received and save it as encrypted
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
  };

module.exports = mongoose.model("Users", User);