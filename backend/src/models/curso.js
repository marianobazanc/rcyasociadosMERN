const mongoose = require("mongoose")

const cursoSchema = mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    ubicacion:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now 
    }
})

module.exports = mongoose.model("Curso", cursoSchema)