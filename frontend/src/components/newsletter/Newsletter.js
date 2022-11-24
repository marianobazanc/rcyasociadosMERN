import React from "react";
import emailjs from '@emailjs/browser';
import swal from "@sweetalert/with-react"
import "./Newsletter.css";

const Newsletter = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value
    }
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const form = document.getElementById("form")

    if(data.email === ""){
      swal("Error", "El campo no puede estar vacio", "error")
      return
    }
    if(!regexEmail.test(data.email)){
      swal("Error", "El email introducido no es valido", "error")
      return
    }
    swal("Cargando... Espere porfavor")
    emailjs.sendForm("service_ffmjjim", "template_9z79hvk", e.target, "-oSTqk-t5I-O7Bg7X")
      .then((result) => {
        form.reset()
        swal("¡Exito!", "Te has suscrito a nuestro newsletter. Recibiras primero que nadie nuestras busquedas laborales", "success")})
      .catch((error) => {swal("¡Error!", "Ocurrio un error inesperado. Intenta de nuevo o mas tarde", "error")});

  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    sendEmail(e)
  };
  return (
    <>
      <div className="">
        <h5 className="text-white">Suscribite a nuestro Newsletter</h5>
        <form className="d-flex" onSubmit={sendEmail} id="form">
          <input
            className="form-control input"
            placeholder="Ingresa aqui tu email"
            name="email"
          />
          <button className="btn btn-success button">Suscribirme</button>
        </form>
        <p className="text-center text-light m-0">
          Suscribiendote a nuestro newsletter te mantendras al dia sobre
          nuestras ofertas laborales
        </p>
      </div>
    </>
  );
};

export default Newsletter;
