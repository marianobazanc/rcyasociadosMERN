import React from 'react'

const Formulario = () => {
  return (
    <div className='p-5 bg-light rounded-1 d-flex align-items-center'>
      <form>
        <h3 className='text-center text-dark fw-bold text-uppercase'>Rellena el formulario</h3>
        <input className='form-control mb-2' type="text" placeholder='Nombre' />
        <input className='form-control mb-2' type="text" placeholder='Email' />
        <input className='form-control mb-2' type="text" placeholder='Telefono' />
        <textarea className='form-control' type="text" placeholder='Mensaje' />
        <button className='form-control btn btn-success mt-2'>Enviar</button>
      </form>
    </div>
  )
}

export default Formulario