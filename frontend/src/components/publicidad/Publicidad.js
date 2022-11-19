import React from "react";
import "./Publicidad.css";

const Publicidad = () => {
  return (
    <a href="https://www.facebook.com" target="_blank" className="background p-4 d-flex flex-column flex-lg-row justify-content-around align-items-center rounded-1 text-white mt-5">
      <div className="text-center">
        <h3 className="fw-bold">Universidad Kennedy</h3>
        <p className="m-0">Encuentra aqui tu carrera del futuro</p>
      </div>
      
      <div className="lista mt-4 mt-lg-0 ">
        <ul className="d-flex flex-column flex-lg-row text-center gap-2 gap-lg-4 m-0 p-0">
          <li>Abogacia</li>
          <li>Contaduria</li>
          <li>Psicopedagogia</li>
          <li>Diseño Grafico</li>
          <li>Relaciones Laborales</li>
        </ul>
      </div>
    </a>
  );
};

export default Publicidad;
