const Dog = require('../models/profiles')
const bcrypt = require('bcrypt-nodejs')


//use model to get profile from database


module.exports = {
    show: (req, res) => {
      Tweet.findOne({ _id: req.params.id })
        .populate("author")
        .exec(function(err, tweet) {
          Comment.populate(tweet.comments, { path: "author" }, function(
            err,
            comments
          ) {
            tweet.comments = comments;
            res.render("index", tweet);
          });
        });
    },
    new: (req, res) => {
      User.find({}).then(users => {
        res.render("index", { users });
      });
    },
    create: (req, res) => {
      Tweet.create({
        content: req.body.tweet.content,
        author: req.body.author
      }).then(tweet => {
        User.findOne({ _id: req.body.author }).then(user => {
          user.tweets.push(tweet);
          user.save(err => {
            res.redirect(`/tweet/${tweet._id}`);
          });
        });
      });
    },
    update: (req, res) => {
      let { content, author } = req.body;
      Tweet.findOne({ _id: req.params.id }).then(tweet => {
        tweet.comments.push({
          content,
          author
        });
        tweet.save(err => {
          res.redirect(`/tweet/${tweet._id}`);
        });
      });
    }
  };