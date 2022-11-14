const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require("../models/user")
const Joi = require("@hapi/joi")
const jwt = require("jsonwebtoken")

const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(255).required()
})

const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(255).required()
})

router.post('/login', async(req, res) => {
    //Validacion
    const {error} = schemaLogin.validate(req.body)
    if(error) return res.status(400).json({error: error.details[0].message})

    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).json({error: true, mensaje: "Error usuario no encontrado"})

    const passValidate = await bcrypt.compare(req.body.password, user.password)
    if(!passValidate) return res.status(400).json({error: true, mensaje:"Contraseña invalida"})

    //JWT
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, process.env.TOKEN_SECRET)

    res.header('authToken', token).json({
        error: null,
        mensaje: "Bienvenido",
        data: {
            name: user.name,
            token 
        },
    }) 
})

router.post('/register', async (req, res) => {
    const {error} = schemaRegister.validate(req.body)

    if(error){
        return res.status(400).json({error: error.details[0].message})
    }

    const emailUnico = await User.findOne({email: req.body.email})
    if(emailUnico){
        return res.status(400).json({error: true, mensaje: "Email ya registrado"})
    }

    const jumps = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, jumps)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password
    })
    try {
        const userDB = await user.save()
        res.json({
            error: null,
            data: userDB
        })
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router