const express = require("express")
const trabajoSchema = require("../models/trabajos")
const verifyToken = require("../middleware/validateToken")

const router = express.Router()

//Crear trabajo
router.post('/trabajos', verifyToken, (req, res) => {
    const trabajo = trabajoSchema(req.body)
    trabajo.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Get todos los trabajos
router.get('/trabajos', (req, res) => {
    trabajoSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Get un trabajo
router.get('/trabajos/:id', (req, res) => {
    const {id} = req.params
    trabajoSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Actualizar un trabajo
router.put('/trabajos/:id', verifyToken, (req, res) => {
    const {id} = req.params
    const {titulo, descripcion, ubicacion, tipo} = req.body
    trabajoSchema.findOneAndUpdate({_id: id}, {$set: {titulo,descripcion, ubicacion, tipo}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Eliminar un trabajo
router.delete('/trabajos/:id', verifyToken, (req, res) => {
    const {id} = req.params
    trabajoSchema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

module.exports = router