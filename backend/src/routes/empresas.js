const express = require("express")
const empresaSchema = require("../models/empresa")
const router = express.Router()

//Crear empresa
router.post("/empresas", (req, res) => {
    const empresa = empresaSchema(req.body)
    empresa.save()
    .then(data => res.json(data))
    .catch(error => res.json({massage: error}))
})

//Obtener todas las empresas
router.get("/empresas", (req, res) => {
    empresaSchema.find()
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

//Obtener una empresa
router.get("/empresas/:id", (req, res) => {
    const {id} = req.params
    empresaSchema.findById(id)
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

//Actualizar una empresa
router.put("/empresas/:id", (req, res) => {
    const {id} = req.params
    const {empresa, nombre, email, telefono, mensaje} = req.body
    empresaSchema.updateOne({_id: id}, {$set: {empresa, nombre, email, telefono, mensaje}})
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

//Eliminar una empresa
router.delete("/empresas/:id", (req, res) => {
    const {id} = req.params
    empresaSchema.remove({_id: id})
    .then(data => res.json(data))
    .catch(error => res.json({message: error}))
})

module.exports = router