import React from "react";
import Newsletter from "../../components/newsletter/Newsletter";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white py-4 d-flex flex-column flex-lg-row gap-4 justify-content-around align-items-center mt-4">
      <div className="col-12 col-lg-4 p-2">
        <Newsletter />
      </div>
      <div className="col-12 col-lg-5 text-center text-lg-start">
        <div className="fs-1">
          <a href="https://www.linkedin.com/in/roxanacostilla/" className="text-white" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/RC.Asoc.Catamarca/" className="text-white" target="_blank">
            <i className="fa-brands fa-square-facebook mx-2"></i>
          </a>
          <a href="https://www.instagram.com/rc.yasociados/" className="text-white" target="_blank">
            <i className="fa-brands fa-square-instagram me-2"></i>
          </a>
          <a href="https://api.whatsapp.com/send?phone=++5493834908238&text=Hola%20muy%20buenas.%20Me%20comunico%20para%20realizarle%20una%20consulta" className="text-white" target="_blank">
            <i className="fa-brands fa-square-whatsapp"></i>
          </a>
        </div>
        <div className="">
          <p className="m-0 text-uppercase">
            <i className="fa-solid fa-envelope me-2"></i>
            gerencia@rcyasociados.ar
          </p>
          <p className="m-0">
            <i className="fa-solid fa-location-dot me-2"></i>Maipú 316 - San
            Fernando del Valle de Catamarca
          </p>
          <p className="m-0">
            <i className="fa-sharp fa-solid fa-code"></i> Web Developer:{" "}
            <a
              className="text-light text-decoration-none"
              href="http://www.marianobazan.com"
              target="_blank"
            >
              <em>Mariano Bazan</em>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
