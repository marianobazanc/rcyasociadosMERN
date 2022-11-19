import React from 'react'
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import Inicio from "../../pages/inicio/Inicio"
import Trabajos from "../../pages/trabajos/Trabajos"
import Navbar from "../navbar/navbar"
import Cursos from "../../pages/cursos/Cursos"
import Contacto from "../../pages/contacto/Contacto"
import DetalleCurso from "../../pages/detalleCurso/detalleCurso"
import DetalleTrabajo from "../../pages/detalleTrabajo/DetalleTrabajo"
import Blog from '../../pages/blog/Blog'
import Testing from '../testing/testing'
import Empresas from "../../pages/empresas/Empresas"

const Rutas = () => {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Inicio/>} />
        <Route exact path="/Inicio" element={<Inicio/>} />
        <Route exact path="/Trabajos" element={<Trabajos/>} />
        <Route exact path="/Cursos" element={<Cursos/>} />
        <Route exact path="/Contacto" element={<Contacto/>} />
        <Route exact path="/Blog" element={<Blog/>} />
        <Route exact path="/Empresas" element={<Empresas/>} />
        <Route path="/Cursos/Curso/:id" element={<DetalleCurso/>} />
        <Route path="/Trabajos/Trabajo/:id" element={<DetalleTrabajo/>} />
      </Routes>
    </Router>
  )
}

export default Rutas