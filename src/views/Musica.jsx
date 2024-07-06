
import React from 'react';
import { Link } from "react-router-dom";
import audioFiles from '../data/musicData';
import ScrollToTopButton from "../components/ScrollToTopButton";

const Musica = () => {
  


  // Dividir audioFiles en subconjuntos de tres elementos cada uno
  const columns = [];
  for (let i = 0; i < audioFiles.length; i += 3) {
    columns.push(audioFiles.slice(i, i + 3));
  }

  return (
    <>
      <div>
        <p id="musica-title">"El Ojo", mi primer disco solista.</p>
      </div>

      <div className="musica-container">
        {columns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="musica-contenido"
          >
            {column.map((audio) => (
              <div key={audio.id}>
                <img
                  src={audio.image}
                  alt={audio.title}
                  loading='lazy'
                  className="imagen"
                />
                <h3>{audio.title}</h3>
                <audio  controls>
                  <source src={audio.src} type="audio/mpeg" />
                  Tu navegador no soporta la reproducción de audio.
                </audio>
              </div>
            ))}
          </div>
        ))}
        <button className="musica-boton">
          <Link to="/luthier">Continuar&gt;&gt;</Link>
        </button>
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Musica;
