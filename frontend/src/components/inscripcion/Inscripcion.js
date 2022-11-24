import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import swal from "@sweetalert/with-react"
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
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const data = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      telefono: e.target.telefono.value,
      opcion: e.target.opcion.value
    }
    const form = document.getElementById("form")
    if(location.pathname.includes("Trabajo")){
      const cv = e.target.cargarCV.value
      if(cv == ""){
        swal("¡Error!", "Es obligatorio que suba el curriculum. Recuerde que solo se acepta formato PDF", "error")
        return
      }
    }
    if(data.nombre === "" || data.email === "" || data.telefono === ""){
      swal("¡Error!", "Todos los campos son obligatorios. Porfavor rellene todos", "error")
      return
    }
    
    if(data.nombre.length < 4){
      swal("¡Error!", "El nombre debe de tener mas de 4 caracteres", "error")
      return
    }

    if(data.telefono.length < 6){
      swal("¡Error!", "El telefono debe de tener mas de 6 caracteres", "error")
      return
    }

    if(!regexEmail.test(data.email)){
      swal("¡Error!", "El email ingresado no es valido. Ingrese uno correcto ejemplo: email@gmail.com", "error")
      return
    }


    swal("Cargando... Espere porfavor")
    if (location.pathname.includes("Curso")) {
      emailjs.sendForm("service_ffmjjim", "template_jvb5ivh", e.target, "-oSTqk-t5I-O7Bg7X")
        .then((result) => {
          swal("Formulario enviado", "Datos enviados con exito. Nos comunicaremos para mandarte mas informacion", "success")
          form.reset()
        })
        .catch((error) => {swal("¡Error!", "Ocurrio un error inesperado. Intenta de nuevo o mas tarde", "error")});
    }else if(location.pathname.includes("Trabajo")){
      emailjs.sendForm("service_ffmjjim", "template_tq5di3a", e.target, "-oSTqk-t5I-O7Bg7X")
        .then((result) => {swal("Postulacion enviada", "Su postulación fue recibida con exito. Nos comunicaremos en caso de continuar con su perfil", "success")})
        .catch((error) => {swal("¡Error!", "Ocurrio un error inesperado. Intenta de nuevo o mas tarde", "error")});
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
            <form onSubmit={sendEmail} id="form">
              <div className="">
                <label className="form-label">Nombre y Apellido</label>
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
                  <p className="m-0">Cargar CV <small className="text-danger">*limite 2mb - Solo se acepta formato ".pdf"</small></p>
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
