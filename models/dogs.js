const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Dog = new Schema ({
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
    }
})