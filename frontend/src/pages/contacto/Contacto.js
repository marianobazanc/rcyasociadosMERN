import React from "react";
import Header from "../../components/header/Header";
import Formulario from "../../components/formulario/Formulario";
import Mapa from "../../components/mapa/Mapa";

const Contacto = () => {
  return (
    <>
      <Header className="headerContacto" texto="Contacta con nosotros" />
      <div className="container d-flex justify-content-center gap-4 my-3">
        <Mapa />
        <Formulario />
      </div>
    </>
  );
};

export default Contacto;
