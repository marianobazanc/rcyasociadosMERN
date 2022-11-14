import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const DetalleCurso = () => {
  const { id } = useParams();
  const [curso, setCurso] = useState([]);
  const { quill, quillRef } = useQuill({
    readOnly: true,
    modules: {
      toolbar: false,
    },
  });
  useEffect(() => {
    const fetching = async () => {
      const api = `http://localhost:4001/api/cursos/${id}`;
      const res = await fetch(api);
      const curso = await res.json();
      setCurso(curso);
      quill.setContents(JSON.parse(curso.descripcion));
    };
    if (quill) {
      fetching();
    }
  }, [quill]);
  return (
    <div className="">
      <div className="bg-white m-2 rounded-1 p-3">
        <h2 className="text-center fw-bold fs-1 text-uppercase m-0">
          {curso.titulo}
        </h2>
        <p className="text-center text-capitalize text-muted">
          {curso.ubicacion}
        </p>
        <div>
          <div ref={quillRef} className="border-0"></div>
        </div>
        <div className="mt-2">
          <button className="btn btn-success">Postularme</button>
          <button className="btn btn-secondary ms-2">Programa</button>
        </div>
      </div>
    </div>
  );
};

export default DetalleCurso;
