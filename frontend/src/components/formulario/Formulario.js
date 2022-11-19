import React, { useState, useEffect } from "react";

const Formulario = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nombre: form.nombre,
      email: form.email,
      telefono: form.telefono,
      mensaje: form.mensaje,
    };
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
          onChange={handleChange}
          value={form.nombre}
          name="nombre"
        />
        <input
          className="form-control mb-2" 
          type="text" 
          placeholder="Email" 
          onChange={handleChange}
          value={form.email}
          name="email"
        />
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Telefono"
          onChange={handleChange}
          value={form.telefono}
          name="telefono"
        />
        <textarea 
          className="form-control" 
          type="text" 
          placeholder="Mensaje"
          onChange={handleChange}
          value={form.mensaje}
          name="mensaje" 
        />
        <button className="form-control btn btn-success mt-2">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
