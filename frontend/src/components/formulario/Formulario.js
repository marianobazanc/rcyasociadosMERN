import React from "react";
import emailjs from '@emailjs/browser';
import swal from "@sweetalert/with-react"

const Formulario = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    const data = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      telefono: e.target.telefono.value,
      mensaje: e.target.mensaje.value
    }
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const form = document.getElementById("form")

    if(data.nombre === "" || data.email === "" || data.telefono === "" || data.mensaje === ""){
      swal("Error", "Todos los campos son obligatorios", "error")
      return
    }
    if(!regexEmail.test(data.email)){
      swal("Error", "El email introducido no es valido. Ingrese uno correcto", "error")
      return
    }

    if(data.mensaje.length < 6){
      swal("Error", "El mensaje debe de tener mas de 6 caracteres", "error")
      return
    }
    if(data.nombre.length < 4){
      swal("Error", "El nombre debe de tener mas de 4 caracteres", "error")
      return
    }
    if(data.telefono.length < 6){
      swal("Error", "El telefono debe de tener mas de 6 caracteres", "error")
      return
    }

    emailjs.sendForm('service_ffmjjim', 'template_xdskikb', e.target, '-oSTqk-t5I-O7Bg7X')
      .then((result) => {
          form.reset()
          swal("Formulario enviado", "Muchas gracias por comunicarte, hemos recibido tu mensaje", "success")
      }, (error) => {
          swal("¡Error!", "Algo falló en el envio del formulario, intenta de nuevo o mas tarde", "error")
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e)
  };

  return (
    <div className="p-5 bg-light rounded-1 d-flex align-items-center justify-content-center">
      <form onSubmit={handleSubmit} id="form">
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
