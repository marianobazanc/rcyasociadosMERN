const express = require("express")
const contactoSchema = require("../models/contacto")
const router = express.Router()

//Crear contacto
router.post("/contactos", (req, res) => {
    const noticia = contactoSchema(req.body)
    noticia.save()
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

//Obtener todos los contactos
router.get("/contactos", (req, res) => {
    contactoSchema.find()
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

//Obtener solo un contacto
router.get("/contactos/:id", (req, res) => {
    const {id} = req.params
    contactoSchema.findById(id)
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

//Actualizar el contacto
router.put("/contactos/:id", (req, res) => {
    const {id} = req.params
    const {email} = req.body
    contactoSchema.updateOne({_id: id}, {$set: {email}})
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

//Eliminar un contacto
router.delete("/contactos/:id", (req, res) => {
    const {id} = req.params
    contactoSchema.remove({_id: id})
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

module.exports = router