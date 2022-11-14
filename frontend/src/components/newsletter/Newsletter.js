import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [dato, setDato] = useState(false);
  const buttonHide = () => {
    setDato(true);
  };
  return (
    <>
      <div
        className={
          dato ? "modal d-none" : "modal d-flex align-items-end justify-content-center animate__animated animate__fadeInUp"
        }
        
      >
        <div className="modal-dialog modal-xl m-0 w-100">
          <div className="modal-content">
            <div className="modal-body">
                <div className="d-flex justify-content-between mb-2">
                    <h5 className="modal-title">Suscribite a nuestro Newsletter</h5>
                    <button
                    className="btn-close"
                    data-bs-dismiss="modal"
                    arial-label="Close"
                    onClick={buttonHide}
                    ></button>
                </div>
                <form className="d-flex">
                    <input className="form-control input" placeholder="ingresa aqui tu email"/>
                    <button className="btn btn-success button">Suscribirme</button>
                </form>
                <p className="text-center text-muted m-0">Suscribiendote a nuestro newsletter te mantendras al dia sobre nuestras ofertas laborales</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
