{/*import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import "./Carousel.css";

const Carousel = () => {
  const [noticia, setNoticia] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const api = "http://localhost:4001/api/noticias";
      const res = await fetch(api);
      const noticias = await res.json();
      if (noticias.length > 3) {
        const noticiasCopia = noticias.slice(0, 3);
        setNoticia(noticiasCopia);
        return;
      }
      setNoticia(noticias);
    };
    fetching();
  }, []);

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
    ]
  return (
    <div className="d-flex gap-2 justify-content-center">
      {noticia.map((noticia) => (
          <div className="card text-center cardNoticia" key={noticia._id}>
            <img src={`${noticia.img}`} className="m-auto" />
            <div className="card-body">
              <h4 className="card-title text-truncate">{noticia.titulo}</h4>
              <p className="card-text textoNoticia">{noticia.descripcion}</p>
            </div>
            <div className="card-footer border-0">
              <a
                href={`${noticia.link}`}
                className="btn btn-dark rounded-0 form-control"
                target="_blank"
              >
                Ver mas
              </a>
            </div>
          </div>
      ))}
      </div>
  );
}

export default Carousel;
*/}