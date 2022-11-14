import React, {useState, useEffect} from 'react'
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards"

const Cursos = () => {
  const[cursos, setCursos] = useState([])
  useEffect(() => {
    const fetching = async() => {
      const api = `http://localhost:4001/api/cursos`
      const res = await fetch(api)
      const cursosArray = await res.json()
      setCursos(cursosArray)
    }
    fetching()
  }, [])
  return (
    <>
      <Header className="headerCursos" texto="Capacitate con nosotros y aumenta tus conocimientos"/>
      <Cards datos={cursos}/>
    </>
  )
}

export default Cursos