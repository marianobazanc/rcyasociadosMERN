import React from "react";
import { Link} from "react-router-dom";
import "./cards.css";

const Cards = ({ datos }) => {
  return (
    <div>
      {datos.map((dato) => (
        <div key={dato._id} className={dato.tipo === "noticia" ? "" : ""}>
          <div
            className={
              dato.tipo === "noticia"
                ? "card "
                : "card col-lg-10 col-sm-12 border-top-0 border-bottom-0 m-auto my-2"
            }
            
          >
            <img
              className={dato.tipo === "noticia" ? "card-img-top" : "d-none"}
              src={dato.tipo === "noticia" ? `${dato.img}` : ""}
              alt=""
            />
            <div className="card-body">
              <h3 className="card-title text-truncate text-capitalize fw-bold my-0">
                {dato.titulo}
              </h3>
              <p className="text-muted m-0 text-capitalize">
                <i
                  className={
                    dato.tipo === "noticia"
                      ? ""
                      : "fa-solid fa-location-dot me-1"
                  }
                ></i>
                {dato.ubicacion}
              </p>
              <p
                className={
                  dato.tipo === "noticia" ? "text-muted mb-0" : "d-none"
                }
              >
                {dato.descripcion}
              </p>
            </div>
            <div className="card-footer border-0 pt-0">
              <Link
                to={
                  dato.tipo === "trabajo"
                    ? `/Trabajos/Trabajo/${dato._id}`
                    : `/Cursos/Curso/${dato._id}`
                }
                className={dato.tipo === "noticia" ? "btn btn-dark w-100" : "btn btn-dark"}
              >
                Ver mas
              </Link>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
