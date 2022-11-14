import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-dark text-center text-white py-4'>
        <div className="fs-1">
          <a href="" className='text-white' target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <a href="" className='text-white' target="_blank"><i className="fa-brands fa-square-facebook mx-2"></i></a>
          <a href="" className='text-white' target="_blank"><i className="fa-brands fa-square-instagram me-2"></i></a>
          <a href="" className='text-white' target="_blank"><i className="fa-brands fa-square-whatsapp"></i></a>
        </div>
        <div className="">
          <p className="m-0 text-uppercase"><i className="fa-solid fa-envelope me-2"></i>gerencia@rcyasociados.ar</p>
          <p className="m-0"><i className="fa-solid fa-location-dot me-2"></i>Maipú 316 - San Fernando del Valle de Catamarca</p>
          <p className='m-0'><i className="fa-sharp fa-solid fa-code"></i> Web Developer: <a className='text-white text-decoration-none' href="http://www.marianobazan.com" target="_blank">Mariano Bazan</a></p>
        </div>
    </footer>
  )
}

export default Footer