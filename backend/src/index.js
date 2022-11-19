const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")

const trabajosRoute = require("./routes/trabajos")
const authRoute = require("./routes/auth")
const admin = require("./routes/admin")
const cursosRoute = require("./routes/curso")
const noticiaRoute = require("./routes/noticia")
const contactoRoute = require("./routes/contacto")
const empresaRoute = require("./routes/empresas")

const verifyToken = require("./middleware/validateToken")

const app = express()
const cors = require("cors")
const curso = require("./models/curso")
var corsOption = {
    origin: "*",
    optionsSuccessStatus: 200
}
app.use(cors(corsOption))

const PORT = process.env.PORT || 4001

require("dotenv").config()

//middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json())

app.use('/api', trabajosRoute)
app.use('/api/user/', authRoute)
app.use('/api/admin', verifyToken, admin)
app.use('/api', cursosRoute) 
app.use('/api', noticiaRoute) 
app.use('/api', contactoRoute) 
app.use('/api', empresaRoute) 

//routes
app.get("/", (req, res) => {
    res.send("Bienvenido a la API")
})

//Conexion con MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Conexion a la BD exitosa!')) 
.catch((error) => console.log(error)) 

app.listen(PORT, () => console.log("El servidor esta funcionando correctamente", PORT))