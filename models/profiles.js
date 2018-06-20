const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Profile = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  location: {
    zipcode: {
      type: Number,
      min: 5,
      max: 10
    }
  },
  bio: {
    type: String,
    max: 500
  },
  interests: {
     dogInterest: {
        type: Boolean
      },
      humanInterest: {
        type: Boolean
      }
    }
})

module.exports = mongoose.model('Profiles', Profile)
