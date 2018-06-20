const User = require("../models/User");
const { Tweet } = require("../models/Tweet");
const bcrypt = require("bcrypt-nodejs");

//users example number 1
const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

  User.find({}).remove(() => {
    Tweet.find({}).remove(() => {
      let bugs = User.create({
        local: {
          email: "bugsbunny@gmail.com",
          password: createPassword("bugsbunny")
        }
      }).then(user => {
        // user is the user object we just made using .create
  
        // Promise.all will run all of the provided functions simultaneously, and return when they're finished
        Promise.all([
          Tweet.create({
            content: "eh, what's up doc?",
            author: user._id
          }).then(tweet => {
            user.tweets.push(tweet);
          }),
          Tweet.create({
            content: "That's all, folks!",
            author: user._id
          }).then(tweet => {
            user.tweets.push(tweet);
          })
        ]).then(() => {
          // our second .then ensures that this code runs after all the previous code is done
          user.save(err => console.log(err));
          // .save writes the record to the database.
        });
      });
    });
  });

  //users example number 2 
  var Seeder = require('../../../').Seeder;
var User = require('../server/models').User;

var data = [
  {
    email: 'user1@gmail.com',
    password: '123123',
    passwordConfirmation: '123123',
    isAdmin: true,
  },
  {
    email: 'user2@gmail.com',
    password: '123123',
    passwordConfirmation: '123123',
    isAdmin: false,
  },
  {
    email: 'user3@gmail.com',
    password: '123123',
    passwordConfirmation: '123123',
    isAdmin: false,
  },
  {
    email: 'user4@gmail.com',
    password: '123123',
    passwordConfirmation: '123123',
    isAdmin: false,
  },
  {
    email: 'user5@gmail.com',
    password: '123123',
    passwordConfirmation: '123123',
    isAdmin: false,
  },
];

var UsersSeeder = Seeder.extend({
  shouldRun: function() {
    return User.count()
      .exec()
      .then(count => count === 0);
  },
  run: function() {
    return User.create(data);
  },
});

module.exports = UsersSeeder;

//number 3
import { Seeder } from "mongoose-data-seed";
import { User } from "../server/models";

const data = [
  {
    email: "user1@gmail.com",
    password: "123123",
    password_confirmation: "123123",
    isAdmin: true
  },
  {
    email: "user2@gmail.com",
    password: "123123",
    password_confirmation: "123123",
    isAdmin: false
  }
];

class UsersSeeder extends Seeder {
  async shouldRun() {
    return User.count()
      .exec()
      .then(count => count === 0);
  }

  async run() {
    return User.create(data);
  }
}

export default UsersSeeder;