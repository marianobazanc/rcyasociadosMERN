import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from "../../pages/inicio/Inicio"
import Trabajos from "../../pages/trabajos/Trabajos"
import Navbar from "../navbar/navbar"
import Cursos from "../../pages/cursos/Cursos"
import Contacto from "../../pages/contacto/Contacto"
import DetalleCurso from "../../pages/detalleCurso/detalleCurso"
import DetalleTrabajo from "../../pages/detalleTrabajo/DetalleTrabajo"
import Blog from '../../pages/blog/Blog'
import Testing from '../testing/testing'

const Rutas = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/Inicio" element={<Inicio/>} />
        <Route path="/Trabajos" element={<Trabajos/>} />
        <Route path="/Cursos" element={<Cursos/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Cursos/Curso/:id" element={<DetalleCurso/>} />
        <Route path="/Trabajos/Trabajo/:id" element={<DetalleTrabajo/>} />
        <Route path="/Test" element={<Testing/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas