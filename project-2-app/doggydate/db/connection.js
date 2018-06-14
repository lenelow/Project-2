const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/doggydate");
mongoose.Promise = Promise;
module.exports = mongoose;