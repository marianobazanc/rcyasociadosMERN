import React from "react";
import { useLocation } from "react-router-dom";

const Inscripcion = () => {
  let location = useLocation();
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
            <form>
              <div className="">
                <label className="form-label">Nombre</label>
                <input className="form-control" type="text" placeholder="" />
              </div>
              <div className="mt-2">
                <label className="form-label">Email</label>
                <input className="form-control" type="text" placeholder="" />
              </div>
              <div className="mt-2">
                <label className="form-label">Telefono</label>
                <input className="form-control" type="text" placeholder="" />
              </div>
              {location.pathname.includes("Curso") ? null : (
                <div className="mt-2">
                  <label className="form-label me-2" htmlFor="cargarCV">
                    Cargar CV
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    name="cargarCV"
                    accept="application/pdf"
                  />
                </div>
              )}
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-success">
              {
                location.pathname.includes("Curso") ? <div className="">Quiero info</div> : (
                  <div className="">Enviar postulacion</div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscripcion;
