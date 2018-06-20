const Profile= require('../models/profiles')
const bcrypt = require('bcrypt-nodejs')
const Booleans = require('../view/profiles/profileForm')


const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

  {
      "id": "1",
      "location": {
                    "zipcode": 20815
                  },
      "bio": "Hi! I'm Leah, and I'm a big dog lover. I'm hoping to meet some kindred spirits and to find a friend for my. I have a fenced-in backyard, so if you live near me and want to drop your dog off to play with mine, send me a message! It will save us both the time and energy of a dog walk and it would be great for our pups. Otherwise, if you want something to cuddle with, want to meet someone, or just want smoeone to walk your dogs with, say hello. We don't bite.",
      "interests" {
                    .checkbox1: true,
                    .checkbox2: true 
                  }
  }