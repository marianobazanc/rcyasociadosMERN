import React from "react";
import emailjs from '@emailjs/browser';

const Formulario = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ffmjjim', 'template_xdskikb', e.target, '-oSTqk-t5I-O7Bg7X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e)
  };

  return (
    <div className="p-5 bg-light rounded-1 d-flex align-items-center justify-content-center">
      <form onSubmit={handleSubmit}>
        <h3 className="text-center text-dark fw-bold text-uppercase mb-4">
          Rellena el formulario
        </h3>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Nombre"
          name="nombre"
        />
        <input
          className="form-control mb-2" 
          type="text" 
          placeholder="Email" 
          name="email"
        />
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Telefono"
          name="telefono"
        />
        <textarea 
          className="form-control" 
          type="text" 
          placeholder="Mensaje"
          name="mensaje" 
        />
        <button className="form-control btn btn-success mt-2">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
