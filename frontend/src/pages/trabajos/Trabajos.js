import React, {useState, useEffect} from 'react'
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards"

const Trabajos = () => {
  const [trabajos, setTrabajos] = useState([])
  useEffect(() => {
    const fetching = async() => {
      const api = "http://localhost:4001/api/trabajos"
      const res = await fetch(api)
      const trabajos = await res.json()
      const trabajosReversa = trabajos.reverse()
      setTrabajos(trabajosReversa)
    }
    fetching()
  }, [])



  return (
    <>
      <Header className="headerTrabajos" texto="Encontra con nosotros tu proximo empleo"/>
      <Cards datos={trabajos}/>
    </>
  )
}

export default Trabajos