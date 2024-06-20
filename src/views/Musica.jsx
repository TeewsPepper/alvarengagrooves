
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
      <div className="music-section flex justify-center bg-slate-800 text-center text-gray-100 font-semibold p-4">
        <p id="musica-title">"El Ojo", mi primer disco solista.</p>
      </div>

      <div className="  grid grid-cols-1 gap-2 p-8 mb-4 m-auto">
        {columns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="col-span-1 grid gap-2 lg:w-1/5 m-auto"
          >
            {column.map((audio) => (
              <div key={audio.id} className=" text-white underline">
                <img
                  src={audio.image}
                  alt={audio.title}
                  className="mt-1 m-auto"
                />
                <h3 className="text-md mt-3 text-center font-bold">{audio.title}</h3>
                <audio className="m-auto mt-1 w-full" controls>
                  <source src={audio.src} type="audio/mpeg" />
                  Tu navegador no soporta la reproducción de audio.
                </audio>
              </div>
            ))}
          </div>
        ))}
        <button className="text-gray-100 font-bold text-sm text-center mt-5 underline">
          <Link to="/luthier">Continuar&gt;&gt;</Link>
        </button>
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Musica;
