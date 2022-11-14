import React from 'react'
import "./header.css"

const Header = ({className, texto}) => {
  return (
    <div className={`header ${className}`}>
        <h1 className='text-center fw-bold text-uppercase text-white'>{texto}</h1>
    </div>
  )
}

export default Header