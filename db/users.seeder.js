const User = require('../models/users');
const Dog = require('../models/dogs');
const bcrypt = require('bcrypt-nodejs');

//users example number 1
const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

  User.find({}).remove(() => {
    Dog.find({}).remove(() => {
      let Bob = User.create({
          email: "bob@gmail.com",
          password: createPassword("bob")
        }).then(user => {
        // user is the user object we just made using .create
  
        // Promise.all will run all of the provided functions simultaneously, and return when they're finished
          Dog.create({
            name: Max,
            weight: "10 pounds",
            breed: "toy poodle",
            avatar: "dhlahgdlahds.jpeg",
            additionalInfo: "I'm new in town, and I would love a dog to play with. I'm very friendly and get along well with all types of dogs.",
            user: user.id
          }).then(profile => {
            user.dogs.push(dog);
          })
        .then(() => {
          // our second .then ensures that this code runs after all the previous code is done
          user.save(err => console.log(err));
          // .save writes the record to the database.
        });
      });
    });
    async shouldRun() {
        return User.count()
          .exec()
          .then(count => count === 0);
      },
    
      async run() {
        return User.create(data);
      }
  });


    export default UsersSeeder;