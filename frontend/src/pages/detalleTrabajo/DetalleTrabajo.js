import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {useQuill} from "react-quilljs"
import "quill/dist/quill.snow.css"
import "./detalleTrabajo.css"

const DetalleTrabajo = () => {
  const { id } = useParams();
  const [trabajo, setTrabajo] = useState([]);
  const { quill, quillRef } = useQuill({
    readOnly: true,
    modules: {
      toolbar: false,
    },
  })
  useEffect(() => {
    const fetching = async () => {
      const api = `http://localhost:4001/api/trabajos/${id}`;
      const res = await fetch(api);
      const trabajo = await res.json();
      setTrabajo(trabajo);
      quill.setContents(JSON.parse(trabajo.descripcion))
    };
    if (quill) {
      fetching();
    }
  }, [quill]);
  return (
    <div className="">
      <div className="bg-white m-2 rounded-1 p-3">
        <h2 className="text-center fw-bold fs-1 text-uppercase m-0">
          {trabajo.titulo}
        </h2>
        <p className="text-center text-capitalize text-muted">
          <i className="fa-solid fa-location-dot me-1"></i>
          {trabajo.ubicacion}
        </p>
        <div>
          <div ref={quillRef} className="border-0"></div>
        </div>
        <button className='btn btn-success mt-3'>Postularme</button>
      </div>
    </div>
  ); 
};

export default DetalleTrabajo;
