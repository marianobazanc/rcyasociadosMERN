const verifyToken = require("../middleware/validateToken")
const express = require("express")
const cursoSchema = require("../models/curso")

const router = express.Router()

//Crear curso
router.post('/cursos', verifyToken, (req, res) => {
    const curso = cursoSchema(req.body)
    curso.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Get todos los curso
router.get('/cursos', (req, res) => {
    cursoSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Get un curso
router.get('/cursos/:id', (req, res) => {
    const {id} = req.params
    cursoSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Actualizar un curso
router.put('/cursos/:id', verifyToken, (req, res) => {
    const {id} = req.params
    const {titulo, descripcion, ubicacion, tipo} = req.body
    cursoSchema.updateOne({_id: id}, {$set: {titulo,descripcion, ubicacion, tipo}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Eliminar un curso
router.delete('/cursos/:id', verifyToken, (req, res) => {
    const {id} = req.params
    cursoSchema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

module.exports = router