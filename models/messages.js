const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profiles'
    }
})