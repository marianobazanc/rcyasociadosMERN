import React from "react";
import emailjs from '@emailjs/browser';
import "./FormularioEmpresas.css"

const FormularioEmpresas = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ffmjjim', 'template_q9y9w6o', e.target, '-oSTqk-t5I-O7Bg7X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendEmail(e)
  };

  return (
    <div className="mt-4 d-sm-flex align-items-center justify-content-center gap-3">
      <div className="">
        <div className="imagenContactanos"></div>
      </div>
      <div className=" bg-white p-4 rounded mt-3 mt-lg-0 col-sm-5 col-lg-6">
        <form className=" mt-lg-0" onSubmit={handleSubmit}>
          <h3 className="fw-bold text-uppercase text-dark text-center">contactate</h3>
          <input
            className="form-control mb-2"
            placeholder="Nombre de la empresa"
            name="empresa"
          />
          <input
            className="form-control mb-2"
            placeholder="Nombre de la persona"
            name="nombre"
          />
          <input
            className="form-control mb-2"
            placeholder="Email"
            name="email"
          />
          <input
            className="form-control mb-2"
            placeholder="Telefono"
            name="telefono"
          />
          <textarea
            className="form-control"
            placeholder="Tu mensaje"
            name="mensaje"
          />
          <button className="btn btn-success mt-2 form-control">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioEmpresas;
