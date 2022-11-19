import React, { useState, useEffect } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      email: form.email,
    };
    try {
      await fetch("http://localhost:4001/api/contactos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      setForm({
        email: ""
      })
    } catch (error) {
      alert("Error al enviar el formulario. Revisa la consola")
      console.log(error)
    }
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
            value={form.email}
            onChange={handleChange}
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
