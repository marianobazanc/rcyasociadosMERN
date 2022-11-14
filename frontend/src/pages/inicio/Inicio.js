import React, {useState, useEffect} from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards"
import Newsletter from "../../components/newsletter/Newsletter";
import Carousel from "../../components/carousel/Carousel";

const Inicio = () => {
  const [trabajo, setTrabajo] = useState([])
  const [curso, setCurso] = useState([])
  const [noticia, setNoticia] = useState([])

  useEffect(() => {
    const fetching = async() => {
      const api = "http://localhost:4001/api/trabajos"
      const res = await fetch(api)
      const trabajos = await res.json()
      if(trabajos.length > 3){
        const trabajosCopia = trabajos.slice(0, 3)
        setTrabajo(trabajosCopia)
        return
      }
      setTrabajo(trabajos)
    }
    fetching()
  }, [])

  useEffect(() => {
    const fetching = async() => {
      const api = "http://localhost:4001/api/cursos"
      const res = await fetch(api)
      const cursos = await res.json()
      if(cursos.length > 3){
        const cursosCopia = cursos.slice(0, 3)
        setCurso(cursosCopia)
        return
      }
      setCurso(cursos)
    }
    fetching()
  }, [])

  useEffect(() => {
    const fetching = async() => {
      const api = "http://localhost:4001/api/noticias"
      const res = await fetch(api)
      const noticias = await res.json()
      if(noticias.length > 3){
        const noticiasCopia = noticias.slice(0, 3)
        setNoticia(noticiasCopia)
        return
      }
      setNoticia(noticias)
    }
    fetching()
  }, [])
  return (
    <>
      <Newsletter />
      <Header className="headerInicio" texto="Primera consultora de recursos humanos de catamarca para el mundo"/>
      <div className="container">
        <h2 className="text-center fw-bold text-uppercase my-4 text-white">Trabajos disponibles</h2>
        <Cards datos={trabajo}/>
        <h2 className="text-center fw-bold text-uppercase my-4 text-white">cursos disponibles</h2>
        <Cards datos={curso} />
        <h2 className="text-center fw-bold text-uppercase my-4 text-white">Noticias</h2>
        <div>
            <Carousel />
        </div>
      </div>
    </>
  );
};

export default Inicio;
