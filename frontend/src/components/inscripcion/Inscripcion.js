import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Inscripcion = () => {
  let location = useLocation();
  let {id} = useParams()
  const[dato, setDato] = useState([])

  useEffect(() => {
    const fetching = async () => {
      if(location.pathname.includes("Trabajo")){
        const api = `http://localhost:4001/api/trabajos/${id}`;
        const res = await fetch(api);
        const dato = await res.json();
        setDato(dato);
      }else{
        const api = `http://localhost:4001/api/cursos/${id}`;
        const res = await fetch(api);
        const dato = await res.json();
        setDato(dato);
      }
    }
    fetching()
  }, [])
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("click")
    if (location.pathname.includes("Curso")) {
      emailjs.sendForm("service_ffmjjim", "template_jvb5ivh", e.target, "-oSTqk-t5I-O7Bg7X")
        .then((result) => {console.log("Curso", result.text)})
        .catch((error) => {console.log("Curso", error.text)});
    }else if(location.pathname.includes("Trabajo")){
      emailjs.sendForm("service_ffmjjim", "template_tq5di3a", e.target, "-oSTqk-t5I-O7Bg7X")
        .then((result) => {console.log("Trabajo", result.text)})
        .catch((error) => {console.log("Trabajo", error.text)});
    }
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content rounded">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Rellena el formulario
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={sendEmail}>
              <div className="">
                <label className="form-label">Nombre</label>
                <input
                  className="form-control"
                  name="nombre"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mt-2">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  name="email"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mt-2">
                <label className="form-label">Telefono</label>
                <input
                  className="form-control"
                  name="telefono"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mt-2">
                <label className="form-label">{location.pathname.includes("Trabajo") ? (<>Puesto</>) : (<>Curso</>)}</label>
                <select className="form-select" id="opcion" name="opcion" value={dato.titulo}>
                  <option value={dato.titulo}>{dato.titulo}</option>
                </select>
              </div>
              {location.pathname.includes("Curso") ? null : (
                <div className="mt-2">
                  <label className="form-label me-2" htmlFor="cargarCV">
                  <p className="m-0">Cargar CV <small className="text-danger">*limite 2mb</small></p>
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    name="cargarCV"
                    accept="application/pdf"
                  />
                </div>
              )}
              <div className="mt-2 d-flex gap-2 justify-content-end">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="btn btn-success">
              {location.pathname.includes("Curso") ? (
                <div className="">Quiero info</div>
              ) : (
                <div className="">Enviar postulacion</div>
              )}
            </button>
            </div>
              </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Inscripcion;
