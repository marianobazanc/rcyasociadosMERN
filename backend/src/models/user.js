const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        max: 25
    },
    email: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 252
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)