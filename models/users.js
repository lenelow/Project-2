var mongoose = require('../db/connection')
const Schema = mongoose.Schema
const DogSchema = require('./dogs')
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
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
    type: String
  },
  dogs: [DogSchema]
})

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

UserSchema.methods.encrypt = function(password) { // hash the password received and save it as encrypted
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

const User = mongoose.model('Users', UserSchema)
module.exports = User
