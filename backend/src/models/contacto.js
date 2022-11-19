const mongoose = require("mongoose")

const contactoSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now 
    }
})

module.exports = mongoose.model("Contacto", contactoSchema)