
import { Link } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Musica = () => {
  const audioFiles = [
    {
      id: 1,
      src: "/assets/audio/01.mp3",
      title: "23",
      image: "/assets/img/1.webp",
    },
    {
      id: 2,
      src: "/assets/audio/02.mp3",
      title: "Cosas",
      image: "/assets/img/2.webp",
    },
    {
      id: 3,
      src: "/assets/audio/03.mp3",
      title: "Desde lo más alto",
      image: "/assets/img/3.webp",
    },
    {
      id: 4,
      src: "/assets/audio/04.mp3",
      title: "El camino",
      image: "/assets/img/4.webp",
    },
    {
      id: 5,
      src: "/assets/audio/05.mp3",
      title: "Gracias che",
      image: "/assets/img/5.webp",
    },
    {
      id: 6,
      src: "/assets/audio/06.mp3",
      title: "La liberación del malvón",
      image: "/assets/img/6.webp",
    },
    {
      id: 7,
      src: "/assets/audio/07.mp3",
      title: "Maca",
      image: "/assets/img/7.webp",
    },
    {
      id: 8,
      src: "/assets/audio/08.mp3",
      title: "Mi flor de Jacarandá",
      image: "/assets/img/8.webp",
    },
    {
      id: 9,
      src: "/assets/audio/09.mp3",
      title: "Nace una alegría",
      image: "/assets/img/9.webp",
    },
    {
      id: 10,
      src: "/assets/audio/10.mp3",
      title: "Nueva era",
      image: "/assets/img/10.webp",
    },
    {
      id: 11,
      src: "/assets/audio/11.mp3",
      title: "Once del once del once",
      image: "/assets/img/12.webp",
    },
    {
      id: 12,
      src: "/assets/audio/12.mp3",
      title: "Sara",
      image: "/assets/img/14.webp",
    },
  ];



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

      <div className="bg-slate-600  grid grid-cols-1 gap-2 p-8 mb-4 m-auto">
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
                <h3 className="text-md text-center font-bold">{audio.title}</h3>
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
