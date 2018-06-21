const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const DogSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  additionalInfo: {
    type: String,
    max: 500
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Dog = mongoose.model('Dogs', DogSchema)
module.exports = Dog
module.exports = DogSchema
