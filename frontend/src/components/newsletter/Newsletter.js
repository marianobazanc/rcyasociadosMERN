import React from "react";
import emailjs from '@emailjs/browser';
import "./Newsletter.css";

const Newsletter = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ffmjjim', 'template_9z79hvk', e.target, '-oSTqk-t5I-O7Bg7X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    sendEmail(e)
  };
  return (
    <>
      <div className="">
        <h5 className="text-white">Suscribite a nuestro Newsletter</h5>
        <form className="d-flex" onSubmit={handleSubmit}>
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
