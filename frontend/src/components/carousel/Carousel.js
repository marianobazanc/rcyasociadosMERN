import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
  const [noticia, setNoticia] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const api = "http://localhost:4001/api/noticias";
      const res = await fetch(api);
      const noticias = await res.json();
      setNoticia(noticias);
    };
    fetching();
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {noticia.map((noticia) => (
          <div className="card cardNoticia text-center rounded-0" key={noticia._id}>
            <img src={`${noticia.img}`} className="card-img-top img" />
            <div className="card-body">
              <h4 className="card-title text-truncate">{noticia.titulo}</h4>
              <p className="card-text">{noticia.descripcion}</p>
            </div>
            <div className="card-footer">
              <a
                href={`${noticia.link}`}
                className="btn btn-secondary rounded-0 form-control"
              >
                Ver mas
              </a>
            </div>
          </div>
      ))}
    </Slider>
  );
};

export default Carousel;
