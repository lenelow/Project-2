const mongoose = require('mongoose')

if (process.env.NODE_ENV === 'production') {
    mongoose.connect(process.env.MLAB_URL)
} else {
mongoose.connect('mongodb://isaac:doggy01ds015760.mlab.com:15760/doggydate')
}

mongoose.Promise = Promise;
module.exports = mongoose;
