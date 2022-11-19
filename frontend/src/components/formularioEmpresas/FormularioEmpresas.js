import React, { useState } from "react";
import "./FormularioEmpresas.css"

const FormularioEmpresas = () => {
  const [form, setForm] = useState({
    empresa: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      empresa: form.empresa,
      nombre: form.nombre,
      email: form.email,
      telefono: form.telefono,
      mensaje: form.mensaje,
    };
    try {
      await fetch("http://localhost:4001/api/empresas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setForm({
        empresa: "",
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
      });
    } catch (error) {
      alert("Error al enviar el formulario. Revise la consola");
      console.log(error);
    }
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
            value={form.empresa}
            onChange={handleChange}
          />
          <input
            className="form-control mb-2"
            placeholder="Nombre de la persona"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
          <input
            className="form-control mb-2"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            className="form-control mb-2"
            placeholder="Telefono"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
          />
          <textarea
            className="form-control"
            placeholder="Tu mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
          />
          <button className="btn btn-success mt-2 form-control">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioEmpresas;
