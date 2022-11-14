const mongoose = require("mongoose")

const noticiaSchema = mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        default: "noticia"
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Noticia", noticiaSchema)