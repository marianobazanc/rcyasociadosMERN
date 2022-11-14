import React, { useState, useEffect } from "react";

const Testing = () => {
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
  return (
    <>
    </>
  );
};

export default Testing;
