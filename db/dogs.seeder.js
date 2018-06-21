// const bcrypt = require('bcrypt-nodejs')
// const seedData = require('./seed')
// var dogModel = require('../models/dog')


// dogModel.remove({})
//   .then(() => {
//     return dogModel.collection.insert(seedData)//erases data
//   })
//   .then(() => {
//     process.exit()
//   })

// function seedDogs() {
//     dogModel.find({}).exec(function (err, collection) {
//         if (collection.length === 0) {
//             dogModel.create({ 'name': 'Sadie' });
//             dogModel.create({ 'age': '12' });
//             dogModel.create({ 'breed': 'lab' });
//             dogModel.create({ 'weight': '60 pounds' });
//             dogModel.create({ 'avatar': 'sadie.png' });
//             dogModel.create({ 'additionalInfo': "I'm old but I still love to play, even if I can only play for 15 minutes before getting tired." });
//         }
//     });
// }

// module.exports = seedDogs 