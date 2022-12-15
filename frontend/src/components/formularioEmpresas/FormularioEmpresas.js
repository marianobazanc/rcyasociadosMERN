import React from "react";
import emailjs from '@emailjs/browser';
import swal from "@sweetalert/with-react"
import "./FormularioEmpresas.css"

const FormularioEmpresas = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    const data = {
      empresa: e.target.empresa.value,
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      telefono: e.target.telefono.value,
      mensaje: e.target.mensaje.value
    }
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const form = document.getElementById("form")

    if(data.empresa === "" || data.nombre === "" || data.email === "" || data.telefono === "" || data.mensaje === ""){
      swal("Error", "Todos los campos son obligatorios", "error")
      return
    }

    if(data.empresa.length < 3){
      swal("Error", "El nombre de la empresa debe tener mas de 3 caracteres", "error")
      return
    }

    if(data.nombre.length < 4){
      swal("Error", "El nombre del encargado debe tener mas de 4 caracteres", "error")
      return
    }

    if(data.telefono.length < 6){
      swal("Error", "El telefono debe tener mas de 6 caracteres")
      return
    }

    if(data.mensaje.length < 6){
      swal("Error", "El mensaje debe tener mas de 6 caracteres", "error")
      return
    }

    if(!regexEmail.test(data.email)){
      swal("Error", "El email no es valido", "error")
      return
    }
    emailjs.sendForm('secret', 'secret', e.target, 'secret')
      .then((result) => {
          form.reset()
          swal("Formulario enviado", "Muchas gracias por contactarte, recibimos tu mensaje. Pronto te responderemos", "success")
      }, (error) => {
          swal("¡Error!", "Algo falló en el envio del formulario, intenta de nuevo o mas tarde", "error")
      });
  };

  const handleSubmit = async (e) => {
    sendEmail(e)
  };

  return (
    <div className="mt-4 d-sm-flex align-items-center justify-content-center gap-3">
      <div className="">
        <div className="imagenContactanos"></div>
      </div>
      <div className=" bg-white p-4 rounded mt-3 mt-lg-0 col-sm-5 col-lg-6">
        <form className=" mt-lg-0" onSubmit={handleSubmit} id="form">
          <h3 className="fw-bold text-uppercase text-dark text-center">contactate</h3>
          <input
            className="form-control mb-2"
            placeholder="Nombre de la empresa"
            name="empresa"
          />
          <input
            className="form-control mb-2"
            placeholder="Nombre del encargado"
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
