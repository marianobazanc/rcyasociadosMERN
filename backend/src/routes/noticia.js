const express = require("express")
const noticiaSchema = require("../models/noticia")
const verifyToken = require("../middleware/validateToken")

const router = express.Router()

//Crear noticia
router.post('/noticias', verifyToken, (req, res) => {
    const noticia = noticiaSchema(req.body)
    noticia.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Get todos los noticia
router.get('/noticias', (req, res) => {
    noticiaSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Get un noticia
router.get('/noticias/:id', (req, res) => {
    const {id} = req.params
    noticiaSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Actualizar un noticia
router.put('/noticias/:id', verifyToken, (req, res) => {
    const {id} = req.params
    const {titulo, descripcion, img} = req.body
    noticiaSchema.updateOne({_id: id}, {$set: {titulo,descripcion, img, link}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Eliminar un noticia
router.delete('/noticias/:id', verifyToken, (req, res) => {
    const {id} = req.params
    noticiaSchema.remove({_id: id})
    .then((data) => res.json(data)) 
    .catch((error) => res.json({message: error}))
})

module.exports = router