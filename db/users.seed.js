const User = require('../models/users')
const Dog = require('../models/dogs')
const bcrypt = require('bcrypt-nodejs')


const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

  {
      "id": "1",
      "name": "Leah Enelow",
      "email": "leahenelow@gmail.com",
      "password": "wdi",
      "avatar": "public/images/leahenelow.png",
      "dogs": {
                  "id:": "1.1",
                  "name": "Dory",
                  "weight": "40 lbs",
                  "age": "7 years",
                  "breed": "purebred mutt",
                  "avatar": "public/images/dory.png",
                  "additionalInfo": "I love humans. I love to jump on them, lick them and cuddle with them, even if they don't want me to. I play well with dogs so long as neither of us are on a leash and my playmate is friendly is friendly. Message my human if you or your dog want to hangout with us!",
                  "user": "user/id/1"
              },
              {
                  "id": "1.2",
                  "name": "Milo",
                  "weight": "30 lbs",
                  "age": "3 years",
                  "breed": "cute",
                  "avatar": "public/images/milo.png",
                  "additionalInfo": "I was a stray when I was a puppy, so I can be a little skiddish and overly emotional when I meet someone for the first time. But I warm up to humans in about 30 seconds, and after a couple of minutes I begin bonding with dogs. My adolescent age means I can play and play for hours without getting tired, so a playmate of mine should be a dog with a lot of energy. My human and I love to go no long hikes together. Are you a busy human whose dog needs more exercise than you have time to give? Are you a human that needs a loving dog to cuddle with or a fellow dog-lover to go on walks with? If so, message my human! It sounds like we'd be a good match."
              }
  }