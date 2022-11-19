import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import Publicidad from "../../components/publicidad/Publicidad";
import CarouselCards from "../../components/carousel/Carousel";
import "./inicio.css"

const Inicio = () => {
  const [trabajo, setTrabajo] = useState([]);
  const [curso, setCurso] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const api = "http://localhost:4001/api/trabajos";
      const res = await fetch(api);
      const trabajos = await res.json();
      if (trabajos.length > 3) {
        const trabajosCopia = trabajos.slice(0, 3);
        setTrabajo(trabajosCopia);
        return;
      }
      setTrabajo(trabajos);
    };
    fetching();
  }, []);

  useEffect(() => {
    const fetching = async () => {
      const api = "http://localhost:4001/api/cursos";
      const res = await fetch(api);
      const cursos = await res.json();
      if (cursos.length > 3) {
        const cursosCopia = cursos.slice(0, 3);
        setCurso(cursosCopia);
        return;
      }
      setCurso(cursos);
    };
    fetching();
  }, []);

  return (
    <>
      <Header
        className="headerInicio"
        texto="Primera consultora de recursos humanos de catamarca para el mundo"
      />
      <div className="container">
        <section className="d-flex flex-column-reverse flex-lg-row">
          <div className="text-start col-12 col-lg-3 nosotros">
            <div className="card mt-2 me-2 mb-2 ms-2 ms-lg-0">
              <div className="card-body">
                <h4 className="text-center fw-bold">Sobre nosotros</h4>
                <p className="card-text">
                  <strong>RC y Asociados</strong> es la primera empresa
                  catamarqueña que desde el 2009 se dedica a brindar servicios
                  integrales para el capital humano, expandiéndonos al NOA,
                  Centro del País y LATAM. <br />
                  <br /> Creemos que generar las mejores soluciones en Recursos
                  Humanos significa hacer e ir más allá.<br/> Nuestra Misión es
                  Identificar y desarrollar personas para acompañar y satisfacer
                  las necesidades de nuestros clientes, brindando soluciones de
                  capital humano, empleabilidad y trabajo que impacten en forma
                  positiva y generen efectividad en las organizaciones,
                  basándonos en los valores que guían nuestro actuar.
                </p>
                <h5 className="fw-bold text-center">¿Que hacemos?</h5>
                <ul>
                  <li>Búsqueda y selección de personal</li>
                  <li>Head-Hunter</li>
                  <li>Recruiter IT</li>
                  <li>Psicotecnicos</li>
                  <li>Capacitaciones in Company/Outdoors</li>
                  <li>Coaching Organizacional</li>
                  <li>Carrer Advisory</li>
                </ul>
              </div>
            </div>
            <iframe width="270" height="200" src="https://www.youtube.com/embed/4awwa4kxGRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="col-12 col-lg-9">
            <h2 className="text-center fw-bold text-uppercase my-4 text-white">
              Trabajos disponibles
            </h2>
            <Cards datos={trabajo} />
            <div className="d-flex justify-content-center">
              <Link to="/Trabajos" className="btn btn-dark col-12 col-lg-10">
                Ver todos los trabajos
              </Link>
            </div>

            <section>
              <div className="m-auto col-10">
                <Publicidad />
              </div>
              <h2 className="text-center fw-bold text-uppercase my-4 text-white">
                cursos disponibles
              </h2>
              <Cards datos={curso} />
              <div className="d-flex justify-content-center">
                <Link to="/Cursos" className="btn btn-dark col-12 col-lg-10">
                  Ver todos los cursos
                </Link>
              </div>
            </section>
          </div>
        </section>

        <section>
          <h2 className="text-center fw-bold text-uppercase my-4 text-white">
            Noticias
          </h2>
          <CarouselCards />
          <div className="d-flex justify-content-center mt-2">
            <Link to="/Cursos" className="btn btn-dark col-10 ">
              Ver todas las noticias
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Inicio;
